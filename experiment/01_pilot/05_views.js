// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for joining this great experiment.
         <br />
         <br />
         Before you can start the experiment, please state whether you are
         left-handed or right-handed.
         <br />
         <br />
         Click on the 'Continue'-Button below to state your answer.`,
  buttonText: 'Continue'
});

// For most tasks, you need instructions views
const instructions_general = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_general',
  title: 'Instructions',
  // Apparently text size/font and alignment changes if sentences appear after the image?
  text: `In the following experiment, you will see squares in one of two sizes in the center of you screen: small or big.
         The picture below depicts both square types.
		 <br />
         <br />
		 In each trial, you will either see the square in panel A or in panel B.
		 Your task is to judge whether the square you see is the smaller or the bigger one.
         <br />
         <br />
         If you see the <strong>small</strong> square, please use the index finger of your <strong>left</strong> hand
         to press the <strong>'q'</strong> key on the left side of your keyboard.
         <br />
         <br />
         If you see the <strong>big</strong> square, please use the index finger of your <strong>right</strong> hand
         to press the <strong>'p'</strong> key on the right side of you keyboard.
         <br />
         <br />
         We will practice this first.
         <br />
         <br />
         Please respond as fast and accurate as possible!
         <p style="text-align:center;"><img src="images/instructions-image.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'Continue'
});

const instructions_practice_compatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_compatible',
  title: 'Further Instructions',
  text:  'General Instructions',
  text: `Alright!
         <br />
         <br />
         Now that you know the difference between the small and the big square,
         we will head to the practice session.
         <br />
         If you click on the blue botton below, you will start to practice
         stating wether the square you are seeing is either small or big.
         <br />
         <br />
         Please be as quick and precise as possible!
         <br />
         <br />
         Don't forget: <strong>'q'</strong> is for <strong>small</strong> and
         <strong>'p'</strong> is for <strong>big</strong>!
         <br />
         <br />
         Let's begin!`,
  buttonText: 'go to practice trials'
});

const instructions_practice_incompatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_incompatible',
  title: 'Instructions for the second half of the experiment',
  text: `You've done great so far!
         <br />
         <br />
         In the second half of this experiment, things are changing a little bit.
         <br />
         Until now, you pressed the key 'q' if you saw a small square and the key
         'P' if you saw a big square.
         <br />
         <br />
         We will <strong>change</strong> this setting now.
         <br />
         <br />
         In the following trials you will have to press the key 'q' if you see
         a <strong>big</strong> square and the key 'p' if you see a
         <strong>small</strong> square.
         <br />
         <br />
         Because this change of the meaning of the keys is a bit confusing, we
         will practice this new setting first!
         `,
  buttonText: 'go to practice trials'
});

const instructions_main_compatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main_compatible',
  title: 'Instructions for the Main Trials',
  text: `After practicing, you're a sqaure-expert now!
         <br />
         <br />
         If you're ready, press the button below and continue with the main
         trials.`,
  buttonText: 'go to main trials'
});

const instructions_main_incompatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main_incompatible',
  title: 'Instructions for the Main Trials',
  text: `We're done with practicing and heading to the second phase of main trials.
         <br />
         <br />
         Again: Please be as quick and precise as possible!`,
  buttonText: 'go to main trials'
});

const instructions_break = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_break',
  title: 'A little break',
  text: `Great, the first half of the experiment is done.
         <br />
         Grab yourself a glass of water, take some deep breaths or do some
         push-ups.
         <br />
         <br />
         If you are ready, please continue with the instructions for the second
         half of the experiment.`,
  buttonText: 'Continue with the experiment'
});




// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const forced_choice_left_right = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 1,
  // name should be identical to the variable name
  name: 'forced_choice_left_right',
  data: left_right.forced_choice,
});

// Practice function for the compatible trials
const practice_compatible = custom_views.keypress_rotation_practice({
  trials: 10,
  name: 'practice_compatible',
  trial_type: 'practice',
  fix_duration: 1000,
  pause: 1500,
  data: _.shuffle(practice_trials_compatible.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the incompatible trials
const practice_incompatible = custom_views.keypress_rotation_practice({
  trials: 10,
  name: 'practice_incompatible',
  trial_type: 'practice',
  fix_duration: 1000,
  pause: 1500,
  data: _.shuffle(practice_trials_incompatible.key_press),
  key1: 'q',
  key2: 'p',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the compatible trials
const main_compatible = custom_views.keypress_rotation_main({
  trials: 20,
  name: 'main_compatible',
  trial_type: 'main',
  fix_duration: 1000,
  pause: 1500,
  data: _.shuffle(main_trials_compatible.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the incompatible trials
const main_incompatible = custom_views.keypress_rotation_main({
  trials: 20,
  name: 'main_incompatible',
  trial_type: 'main',
  fix_duration: 1000,
  pause: 1500,
  data: _.shuffle(main_trials_incompatible.key_press),
  key1: 'q',
  key2: 'p',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
