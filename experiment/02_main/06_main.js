// In this file you initialize and configure your experiment using magpieInit

// Participants are randomly assigned to the order of either "compatible - incompatible" or "incompatible - compatible"
const mapping = _.sample(["compatible", "incompatible"]);

// Therefore, both groups have their own view sequence

// First group: compatible first
if (mapping == "compatible") {

  $("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    window.magpie_monitor = magpieInit({
        // views sequence
        views_seq: [

            // Basic intro and instructions, independent of compatibility
            intro,
            instructions_general,

            // Start with compatible trials
            instructions_practice_compatible_1,
            practice_compatible_1,
            instructions_main_1,
            main_compatible_1,

			// break between trial blocks
            instructions_break,

            // Second half with incompatible trials
            instructions_practice_incompatible_2,
            practice_incompatible_2,
            instructions_main_2,
            main_incompatible_2,

            // Post questionnaire and thanks
            post_test,
            thanks,
        ],
        // deployment information
        deploy: {
            experimentID: "155",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "office@niklas-bub.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // progress bar (seen by the participant in the top right corner of the screen)
        progress_bar: {
            in: [
                // view-names of the views which have a progress bar
                practice_compatible_1.name,
				practice_incompatible_1.name,
                practice_compatible_2.name,
				practice_incompatible_2.name,
				main_compatible_1.name,
                main_compatible_2.name,
				main_incompatible_1.name,
                main_incompatible_2.name
            ],
             // Style of progress bar
            style: "separate",
            width: 100
        }
    });
});

}

// Second group: incompatible first
else {
	$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    window.magpie_monitor = magpieInit({
        // views sequence
        views_seq: [

            // Basic intro and instructions, independent of compatibility
            intro,
            instructions_general,

            // Start with incompatible trials
            instructions_practice_incompatible_1,
            practice_incompatible_1,
            instructions_main_1,
            main_incompatible_1,

			// break between trial blocks
            instructions_break,

		    // Second half with compatible trials
            instructions_practice_compatible_2,
            practice_compatible_2,
            instructions_main_2,
            main_compatible_2,

            // Post questionnaire and thanks
            post_test,
            thanks,
        ],
        // deployment information
        deploy: {
            experimentID: "155",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "office@niklas-bub.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // progress bar (seen by the participant in the top right corner of the screen)
        progress_bar: {
            in: [
                // view-names of the views which have a progress bar
                practice_compatible_1.name,
				practice_incompatible_1.name,
                practice_compatible_2.name,
				practice_incompatible_2.name,
				main_compatible_1.name,
                main_compatible_2.name,
				main_incompatible_1.name,
                main_incompatible_2.name
            ],
             // Style of progress bar
            style: "separate",
            width: 100
        }
    });
});

}
