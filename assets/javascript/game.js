$(document).ready(function () {
	// variables
	// calcuates a random number between 19 and 120
	var randomNumber = Math.floor(Math.random()*101) + 19;
	// calculates a random number for each button between 1 and 12
	var rectangleNumber = Math.floor(Math.random()*12) + 1;
	var diamondNumber = Math.floor(Math.random()*12) + 1;
	var circleNumber = Math.floor(Math.random()*12) + 1;
	var squareNumber = Math.floor(Math.random()*12) + 1;
	// total score based on button choices
	var totalScore = 0;
	// wins and losses
	var wins = 0;
	var losses = 0;

	// assigning random values created to the buttons
	$('#rectangleButton').val(rectangleNumber);
	$('#diamondButton').val(diamondNumber);
	$('#circleButton').val(circleNumber); 
	$('#squareButton').val(squareNumber);

	// function for resetting the game
	function reset() {
		var randomNumber = Math.floor(Math.random()*101) + 19;
		var rectangleNumber = Math.floor(Math.random()*12) + 1;
		var diamondNumber = Math.floor(Math.random()*12) + 1;
		var circleNumber = Math.floor(Math.random()*12) + 1;
		var squareNumber = Math.floor(Math.random()*12) + 1;
		var totalScore = 0;
		$('#rectangleButton').val(rectangleNumber);
		$('#diamondButton').val(diamondNumber);
		$('#circleButton').val(circleNumber); 
		$('#squareButton').val(squareNumber);
	};

	if (totalScore == randomNumber) {
		wins++;
		console.log("Wins:" + wins);
		reset();
		} 

	if (totalScore > randomNumber) {
		losses ++ ;
		console.log("Losses: " + losses);
		reset();
		};

	$("#randomNumber").html(randomNumber);
	$("#totalScore").html(randomNumber);

	console.log(randomNumber)
	console.log(rectangleButton)
	console.log(diamondButton)
	console.log(circleButton)
	console.log(squareButton)
});