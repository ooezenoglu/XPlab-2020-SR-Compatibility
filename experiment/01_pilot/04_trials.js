// In this file you can specify the trial data for your experiment




const left_right = {
	forced_choice: [
		{
			question: "Are you left-handed or right-handed?",
			picture: "images/hands_unsplashed.png",
			option1: 'left-handed',
			option2: 'right-handed',
			correct: 'right-handed'
		}
	]
}

const example_picture = {
	key_press: [
		{
			question: `Right here you can see the two squares that will appear in this
			           experiment.
								 <br />
								 The square which is labeled with the letter 'A' is the small
								 square and the one which is labeled with 'B' is the big square.
								 <br />
								 <br />
								 Just to make sure that you understood the difference:
								 <br />
								 Is the square labeled with 'B' the small or the big square?
								 <br />
								 <br />
								 Please press the key <strong>'q'</strong> if you think it is
								 the small square or <strong>'p'</strong> if you think it is
								 the big one!`,
			picture: "images/instructions-image.png",
			key1: 'q',
			key2: 'p',
			q: 'small',
			p: 'big',
			expected: 'big'
		}
	]
}

const practice_trials_compatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		}
	]
}

const practice_trials_incompatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		}
	]
};


const main_trials_compatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'small',
	  	p: 'big',
	  	expected: 'big'
		}
	]
}


const main_trials_incompatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	key1: 'q',
	  	key2: 'p',
	  	q: 'big',
	  	p: 'small',
	  	expected: 'big'
		}
	]
};
