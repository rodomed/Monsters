$(document).ready(function() {

	var headclik = 0, eyesclik = 0, noseclik = 0, mouthclik = 0;

	function lightnOne() {
		$("#lightning1").fadeIn(250).fadeOut(250);
		  setTimeout(lightnOne, 3000);
	};

	function lightnTwo() {
		$("#lightning2").fadeIn(250).fadeOut('250');
		setTimeout(lightnTwo, 5000);
	};

	function lightnThree() {
		$("#lightning3").fadeIn('250').fadeOut('250');
		setTimeout(lightnThree, 4000);
	};

	setTimeout(lightnOne, 3000);
	setTimeout(lightnTwo, 2000);
	setTimeout(lightnThree, 5000);

	$("#head").click(function() {
		if (headclik < 9) {
			$(this).animate({
				left: '-=367px'
			}, 500); 
			headclik+=1;
		} else {
			$(this).animate({
				left: '0'
			}, 400);
			headclik = 0;
		}
	});

	$("#eyes").click(function() {
		if (eyesclik < 9) {
			$(this).animate({
				left: '-=367px'
			}, 500); 
			eyesclik+=1;
		} else {
			$(this).animate({
				left: '0'
			}, 400);
			eyesclik = 0;
		}
	});

	$("#nose").click(function() {
		if (noseclik < 9) {
			$(this).animate({
				left: '-=367px'
			}, 500); 
			noseclik+=1;
		} else {
			$(this).animate({
				left: '0'
			}, 400);
			noseclik = 0;
		}
	});

	$("#mouth").click(function() {
		if (mouthclik < 9) {
			$(this).animate({
				left: '-=367px'
			}, 500); 
			mouthclik+=1;
		} else {
			$(this).animate({
				left: '0'
			}, 400);
			mouthclik = 0;
		}
	});
})


