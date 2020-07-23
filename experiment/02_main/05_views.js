// Intro view to give general information about the experiment
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in this experiment!
         <br />
         <br />
         Unfortunately, it is <strong>not possible</strong> to take part in this
         experiment with a smartphone or tablet. If you are using one of them right now, please
         <strong>close this window</strong> and open it again on a <strong>laptop
         or desktop computer</strong>.
         <br />
         <br />
         The data you will provide here will be kept <strong>anonymous</strong>. Your participation in this experiment
         is <strong>voluntary</strong>, and you may quit at <strong>any moment</strong>. This experiment will take around
         <strong>10 to 15 minutes</strong>.
         `,
  buttonText: 'Continue'
});

// General instructions, independent of the mapping condition
const instructions_general = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_general',
  title: 'Instructions',
  // Apparently text size/font and alignment changes if sentences appear after the image?
  text: `In the following experiment, you will see squares in <strong>one of two sizes</strong> in the center of your screen: <strong>small</strong> or <strong>big</strong>.
         The picture below displays both square types.
		     <br />
         <br />
		     In each trial, you will either see square A or square B.
		     Your task is to judge whether the square you see is the <strong>smaller</strong> or the <strong>bigger</strong> one.
         <br />
         <br />
         We will <strong>practice</strong> this first.
         <br />
         <br />
         Please make sure that you will <strong>not get disturbed</strong> in the next 10-15 minutes and that you <strong>fully concentrate</strong> on the experiment!
         <p style="text-align:center;"><img src="materials/instructions-image.jpg" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'Continue'
});

// Practice instructions for the compatible-first mapping
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

// Practice instructions for the incompatible-first mapping
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

// Practice instructions for the compatible-second (incompatible-first) mapping
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
         Due to this reversal of the keys, we will practice this new setting first!
         `,
  buttonText: 'go to practice trials'
});

// Practice instructions for the incompatible-second (compatible-first) mapping
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
         Due to this reversal of the keys, we will practice this new setting first!
         `,
  buttonText: 'go to practice trials'
});

// Main instructions for the first half of main trials
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

// Main instructions for the second half of main trials
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

// Instruction view for indicating that an optional pause is possible
const instructions_break = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_break',
  title: 'A little break',
  text: `Great, the first half of the experiment is done.
         <br />
         If you want to, you can take a short break now.
         <br />
         <br />
         If you are ready, please continue with the instructions for the second
         half of the experiment.`,
  buttonText: 'Continue with the experiment'
});




// Post test questionnaire that includes questions about the age, native languages,
// gender, optional comments and, for this study especially important, the dominant
// hand
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: `You are almost done! Answering the following questions is optional.
  However, you are <strong>highly encouraged to indicate your dominant hand
  (highlighted question).</strong>`,

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
   edu_question: '<span style="background-color:#FFFF00">Dominant hand</span>',
   edu_graduated_high_school: 'left',
   edu_graduated_college: 'right',
   edu_higher_degree: 'I am able to use both hands equally well',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// thanks view and submission of the results
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});


// Practice function for the compatible-first mapping trials (10 trials)
const practice_compatible_1 = custom_views.keypress_rotation({
  trials: 10,
  name: 'practice_compatible_1',
  trial_type: 'practice',
    condition: 'compatible',
	order: 'compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_10.key_press),
  key1: 'q',
  key2: 'p',
  left: 'small',
  right: 'big',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the compatible-second (incompatible-first) mapping
// trials (20 trials)
const practice_compatible_2 = custom_views.keypress_rotation({
  trials: 20,
  name: 'practice_compatible_2',
  trial_type: 'practice',
  condition: 'compatible',
  order: 'compatible_second',
  fix_duration: 1000,
  data: _.shuffle(trial_data_20.key_press),
  key1: 'q',
  key2: 'p',
  left: 'small',
  right: 'big',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the incompatible-first mapping trials (10 trials)
const practice_incompatible_1 = custom_views.keypress_rotation({
  trials: 10,
  name: 'practice_incompatible_1',
  trial_type: 'practice',
  condition: 'incompatible',
  order: 'compatible_second',
  fix_duration: 1000,
  data: _.shuffle(trial_data_10.key_press),
  key1: 'q',
  key2: 'p',
  left: 'big',
  right: 'small',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Practice function for the incompatible-second (compatible-first) mapping
// trials (20 trials)
const practice_incompatible_2 = custom_views.keypress_rotation({
  trials: 20,
  name: 'practice_incompatible_2',
  trial_type: 'practice',
  condition: 'incompatible',
  order: 'compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_20.key_press),
  key1: 'q',
  key2: 'p',
  left: 'big',
  right: 'small',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the compatible-first mapping trials (60 trials)
const main_compatible_1 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_compatible_1',
  trial_type: 'main',
  condition: 'compatible',
  order: 'compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  left: 'small',
  right: 'big',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the compatible-second (incompatible-first) mapping
// trials (60 trials)
const main_compatible_2 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_compatible_2',
  trial_type: 'main',
  condition: 'compatible',
  order: 'compatible_second',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  left: 'small',
  right: 'big',
  q: 'small',
  p: 'big',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the incompatible-first mapping trials (60 trials)
const main_incompatible_1 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_incompatible_1',
  trial_type: 'main',
  condition: 'incompatible',
  order: 'compatible_second',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  left: 'big',
  right: 'small',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});

// Main function for the incompatible-second (compatible-first) mapping
// trials (60 trials)
const main_incompatible_2 = custom_views.keypress_rotation({
  trials: 60,
  name: 'main_incompatible_2',
  trial_type: 'main',
    condition: 'incompatible',
	order: 'compatible_first',
  fix_duration: 1000,
  data: _.shuffle(trial_data_60.key_press),
  key1: 'q',
  key2: 'p',
  left: 'big',
  right: 'small',
  q: 'big',
  p: 'small',
  hook: {
    after_response_enabled: count_time
  }
});
