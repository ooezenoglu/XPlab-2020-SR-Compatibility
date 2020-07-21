//Create custom_views object
const custom_views = {};

// Add custom view template for trials to custom_views object
// for more information: https://magpie-ea.github.io/magpie-docs/01_designing_experiments/03_custom_views/
custom_views.keypress_rotation = function(config) {
    const keypress_rotation_function = {
       name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime;
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
			
			// add key configurations
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
			
			// stimulus container generator for keyPress function
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;
            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'>${question}</p>
                          </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();


				// handle response function for measuring the reaction to the pressed keys of the participants
                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime - 1000; // measure RT before anything else, substract fixation time from trial (1000)

					// reset the timeout array
					  clearTimeout(window.timeout[0]);
					  window.timeout.shift();
					  clearTimeout(window.timeout[0]);
					  window.timeout.shift();


					// if RT > 2000ms there is timeout screen and the variable is changed to timeout
					if (RT > 2000) {
						correctness = "timeout";
						$(".magpie-view-stimulus").addClass("magpie-invisible");
						$('#feedback').text('');
					}
					// if keyPressed is correct, show blank screen and save variable correctness as "correct"
                    else if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = "correct";
                        // show blank screen
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('');
                    }
					// if keyPressed is incorrect, show feedback and save variable correctness as "incorrect"
					else {
                        correctness = "incorrect";
                        // show feedback
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect answer!');
                    }


					// add variables for statistical analysis
                    const trial_data = {
                        trial_type: config.trial_type,
						condition: config.condition,
						order: config.order,
						left: config.left, 
						right: config.right,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 1500); // 1500ms pause between each trial as in original study
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_rotation_function;
};
