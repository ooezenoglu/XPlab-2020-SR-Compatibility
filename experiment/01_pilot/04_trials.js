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


const trial_data_10 = {
	key_press: [
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
}


const trial_data_20 = {
	key_press: [
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
}


const trial_data_60 = {
	key_press: [
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "images/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "images/large-stimulus.png",
	  	expected: 'big'
		}
	]
}
