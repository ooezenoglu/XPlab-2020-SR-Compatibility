// In this file you initialize and configure your experiment using magpieInit

// Random selection of
const mapping = _.sample(["compatible", "incompatible"]);

// head = compatible first
if (mapping == "compatible") {

  $("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
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
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "155",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "office@niklas-bub.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice_compatible_1.name,
				        practice_incompatible_1.name,
                practice_compatible_2.name,
				        practice_incompatible_2.name,
				        main_compatible_1.name,
                main_compatible_2.name,
				        main_incompatible_1.name,
                main_incompatible_2.name
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});

}


else {
	$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
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
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "155",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "office@niklas-bub.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice_compatible_1.name,
				        practice_incompatible_1.name,
                practice_compatible_2.name,
				        practice_incompatible_2.name,
				        main_compatible_1.name,
                main_compatible_2.name,
				        main_incompatible_1.name,
                main_incompatible_2.name
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});

}
