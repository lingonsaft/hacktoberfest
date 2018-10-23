let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const stone_div = document.getElementById("st");
const paper_div = document.getElementById("pa");
const scissors_div = document.getElementById("sc");
const win_div = document.getElementById("w");
const loose_div = document.getElementById("l");
const draw_div = document.getElementById("d");

function getComputerChoice() {
	const choices = ['st', 'pa', 'sc'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}

function convertToWord(letters) {
	if(letters === 'st') {
		return "Rock";
	}
	else if(letters === "pa") {
		return "Paper";
	}
	else {
		return "Scissors";
	}

}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} !! You Win :)`;
	document.getElementById(userChoice).classList.add('win-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('win-glow')
	}, 1000);
}

function loose(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} !! You Loose :(`;
	document.getElementById(userChoice).classList.add('loose-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('loose-glow')
	}, 1000);
}

function draw(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(computerChoice)} !! It's a Draw :P`;
	document.getElementById(userChoice).classList.add('draw-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('draw-glow')
	}, 1000);
}

function game(userChoice) {
	//while(userScore != 10 || computerScore != 10){
	const computerChoice = getComputerChoice();
	//console.log("userChoice" + userChoice);
	//console.log("computerChoice" + computerChoice);
	switch(userChoice + computerChoice) {
		case "stsc":
		case "past":
		case "scpa":
			//console.log("You Win :)");
			win(userChoice, computerChoice);
			break;
		case "stpa":
		case "pasc":
		case "scst":
			//console.log("You Loose :(");
			loose(userChoice, computerChoice);
			break;
		case "stst":
		case "papa":
		case "scsc":
			//console.log("It's a Draw :|");
			draw(userChoice, computerChoice);
			break;
	}
	//}
}

function main() {
	stone_div.addEventListener('click', function() {
		game("st");
	})

	paper_div.addEventListener('click', function() {
		game("pa");
	})

	scissors_div.addEventListener('click', function() {
		game("sc");
	})
}

main();
