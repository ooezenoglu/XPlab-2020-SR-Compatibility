// In this file you can specify the trial data for your experiment

//Error feedback if participants exceeds the time for responding, and hides stimulus
const count_time = function (data, next) {
  if (typeof window.timeout === 'undefined') {
    window.timeout = [];
  }
  // add the timeout to the timeoutarray
  window.timeout.push(setTimeout(function () {
    $(".magpie-view-stimulus").addClass("magpie-invisible");
      $('#feedback').text('Please answer more quickly!');
  }, 2000));
  next();
};


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


const practice_trials_compatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
}

const practice_trials_incompatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
};


const main_trials_compatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
}


const main_trials_incompatible = {
	key_press: [
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
		  question: "Is this a small or a big square?",
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
			question: "Is this a small or a big square?",
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
};
