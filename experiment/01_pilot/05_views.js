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
  text: `In the following experiment, you will see squares in <strong>one of two sizes</strong> in the center of you screen: <strong>small</strong> or <strong>big</strong>.
         The picture below displays both square types.
		     <br />
         <br />
		     In each trial, you will either see the square in panel A or in panel B.
		     Your task is to judge whether the square you see is the <strong>smaller</strong> or the <strong>bigger</strong> one.
         <br />
         <br />
         We will <strong>practice</strong> this first.
         <br />
         <br />
         Please make sure that you will <strong>not get disturbed</strong> in the next 10-15 minutes and that you <strong>fully concentrate</strong> on this experiment!
         <p style="text-align:center;"><img src="../materials/instructions-image.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'Continue'
});

const instructions_practice_compatible_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_compatible_1',
  title: 'Further Instructions',
  text: `Alright!
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
         Please be as <strong>quick and precise</strong> as possible!
         <br />
         <br />
         Let's begin!`,
  buttonText: 'go to practice trials'
});

const instructions_practice_incompatible_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_incompatible_1',
  title: 'Further instructions',
  text: `Alright!
         <br />
         <br />
         If you see the <strong>small</strong> square, please use the index finger of your <strong>right</strong> hand
         to press the <strong>'p'</strong> key on the right side of your keyboard.
         <br />
         <br />
         If you see the <strong>big</strong> square, please use the index finger of your <strong>left</strong> hand
         to press the <strong>'q'</strong> key on the left side of you keyboard.
         <br />
         <br />
         Please be as <strong>quick and precise</strong> as possible!
         <br />
         <br />
         Let's begin!`,
  buttonText: 'go to practice trials'
});

const instructions_practice_compatible_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_compatible_2',
  title: 'Instructions for the second half of the experiment',
  text: `You've done great so far!
         <br />
         <br />
         In the second half of this experiment, things are changing a little bit.
         <br />
         Until now, you pressed the <strong>'p'</strong> key if you saw a small square and the
         <strong>'q'</strong> key if you saw a big square.
         <br />
         <br />
         We will <strong>reverse</strong> this setting now.
         <br />
         <br />
         In the following trials you will have to press the <strong>'p'</strong> key if you see
         a <strong>big</strong> square and the <strong>'q'</strong> key if you see a
         <strong>small</strong> square.
         <br />
         <br />
         Because this reversal of the keys is a bit confusing, we
         will practice this new setting first!
         `,
  buttonText: 'go to practice trials'
});

const instructions_practice_incompatible_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice_incompatible_2',
  title: 'Instructions for the second half of the experiment',
  text: `You've done great so far!
         <br />
         <br />
         In the second half of this experiment, things are changing a little bit.
         <br />
         Until now, you pressed the <strong>'q'</strong> key if you saw a small square and the
         <strong>'p'</strong> key if you saw a big square.
         <br />
         <br />
         We will <strong>reverse</strong> this setting now.
         <br />
         <br />
         In the following trials you will have to press the <strong>'q'</strong> key if you see
         a <strong>big</strong> square and the <strong>'p'</strong> key if you see a
         <strong>small</strong> square.
         <br />
         <br />
         Because this reversal of the keys is a bit confusing, we
         will practice this new setting first!
         `,
  buttonText: 'go to practice trials'
});


const instructions_main_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main_1',
  title: 'Instructions for the Main Trials',
  text: `We're done with practicing and will head to the <strong>main trials</strong> now.
         <br />
         <br />
         Again: Please be as <strong>quick and precise</strong> as possible!
         <br />
         <br />
         If you're ready, press the button below and continue with the main
         trials.`,
  buttonText: 'go to main trials'
});

const instructions_main_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main_2',
  title: 'Instructions for the Main Trials',
  text: `We're done with practicing and will head to the <strong>main trials</strong> now.
         <br />
         <br />
         Again: Please be as <strong>quick and precise</strong> as possible!
         <br />
         <br />
         If you're ready, press the button below and continue with the main
         trials.`,
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

// Practice function for the compatible trials
const practice_compatible_1 = custom_views.keypress_rotation({
  trials: 10,
  name: 'practice_compatible_1',
  trial_type: 'practice_compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_10.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the compatible trials
const practice_compatible_2 = custom_views.keypress_rotation({
  trials: 20,
  name: 'practice_compatible_2',
  trial_type: 'practice_incompatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_20.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the incompatible trials
const practice_incompatible_1 = custom_views.keypress_rotation({
  trials: 10,
  name: 'practice_incompatible_1',
  trial_type: 'practice_incompatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_10.key_press),
  key1: 'q',
  key2: 'p',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the incompatible trials
const practice_incompatible_2 = custom_views.keypress_rotation({
  trials: 20,
  name: 'practice_incompatible_2',
  trial_type: 'practice_compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_20.key_press),
  key1: 'q',
  key2: 'p',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the compatible trials
const main_compatible_1 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_compatible_1',
  trial_type: 'main_compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the compatible trials
const main_compatible_2 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_compatible_2',
  trial_type: 'main_incompatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the incompatible trials
const main_incompatible_1 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_incompatible_1',
  trial_type: 'main_incompatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the incompatible trials
const main_incompatible_2 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_incompatible_2',
  trial_type: 'main_compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
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
