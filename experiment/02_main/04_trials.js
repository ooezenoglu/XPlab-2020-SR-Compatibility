//Error feedback if participants exceeds the time for responding, and hides stimulus
const count_time = function (data, next) {
  if (typeof window.timeout === 'undefined') {
    window.timeout = [];
  }
  // add the timeout to the timeoutarray
  window.timeout.push(setTimeout(function () {
    $(".magpie-view-stimulus").addClass("magpie-invisible");
      $('#feedback').text(`Please answer more quickly! (Press 'q' or 'p' to continue)`);
  }, 2000));
  next();
};

// trial data for the first trial sequence (10 trials)
const trial_data_10 = {
	key_press: [
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
		},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		}
	]
}

//trial data for the second trial sequence (20 trials)
const trial_data_20 = {
	key_press: [
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		}
	]
}

// trial data for the main trial sequences (60 trials)
const trial_data_60 = {
	key_press: [
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
    {
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		},
		{
	  	picture: "materials/small-stimulus.png",
	  	expected: 'small'
  	},
		{
	  	picture: "materials/large-stimulus.png",
	  	expected: 'big'
		}
	]
}
