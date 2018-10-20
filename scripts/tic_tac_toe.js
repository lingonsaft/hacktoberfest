var record = [0,1,2,3,4,5,6,7,8];
var player1 = "O";
var player2 = 'X';
var choseId;
var aiRecord;
var turn;
var playerChose=["O"];
var random;

chooseOX();


function checkPlayer(turn){
if(turn == player1 ){
		return player2;
	}else{
		return player1;
	} // to change between O and X
}

function chooseOX(){
	$("table,#startGame,#replay,#win,#lose,#tie").hide();
	//choose O
	$("#O").on("click",function(){
		playerChose.shift();
		playerChose.push("O"); 
		$("#startGame").show();
		return turn = player1;
	});
	$("#X").on("click",function(){
		playerChose.shift();
		playerChose.push("X"); 
		$("#startGame").show();
		return turn = player2;
	});

	console.log(aiRecord);


	//choose X

}

function gameStart(){
	$(".cell").on("click",function(){
	$(this).off('click');
	whoWin();
	// var turn = player1; //choose O or X to start;
	choseId = $(this).attr('id');
	$(this).text(turn);
	record[choseId] = turn;
	// player play
	aiRecord = record.filter(function(x){return x!=="O" && x!=="X"});
	// give a new array for ai chooseing
	turn = checkPlayer(turn);
	// tie situation 
	if (aiRecord.length == 0){
		tie();
	} else{
		random();
	}
	turn = checkPlayer(turn);
	// check if someone won!!
	whoWin(); // check if anyone win
});
}

function random(){
	var random = aiRecord[Math.floor(Math.random()*(aiRecord.length))];
	record[random] = turn;
	$(".cell").eq(random).text(turn);
}




$("#startGame").on("click",function(){
	$(".cell").text("");
	$("#O,#X").hide();
	record = [0,1,2,3,4,5,6,7,8];
	aiRecord = [0,1,2,3,4,5,6,7,8];
	$("table").show("slow");
	// $("#status").prepend('<button id="replay"> Replay </button>');
	// need to reset the game
	$("#startGame").hide();
	$("#replay").show();
	$(".cell").css("background-color","#4CAF50")
	gameStart();
})


$("#replay").on("click",function(){
	record = [0,1,2,3,4,5,6,7,8];
	aiRecord = [0,1,2,3,4,5,6,7,8];
	chooseOX();
	$("#O,#X").show(50);
	window.location.reload();
});


function whoWin(){
	if(record[0] == record[1] && record[1] == record[2]){
		$("#0,#1,#2").css("background-color","red");
		win(record[0]);
	} else if(record[3] == record[4] && record[4] == record[5]){
		$("#3,#4,#5").css("background-color","red");
		win(record[3]);
	} else if(record[6] == record[7] && record[7] == record[8]){
		$("#6,#7,#8").css("background-color","red");
		win(record[6]);
	} else if(record[0] == record[3] && record[3] == record[6]){
		$("#0,#3,#6").css("background-color","red");
		win(record[0]);
	} else if(record[1] == record[4] && record[4] == record[7]){
		$("#1,#4,#7").css("background-color","red");
		win(record[1]);
	} else if(record[2] == record[5] && record[5] == record[8]){
		$("#2,#5,#8").css("background-color","red");
		win(record[2]);
	} else if(record[0] == record[4] && record[4] == record[8]){
		$("#0,#4,#8").css("background-color","red");
		win(record[0]);
	} else if(record[2] == record[4] && record[4] == record[6]){
		$("#2,#4,#6").css("background-color","red");
		win(record[2]);
	}
} // whoWin

function win(opt){
	if(playerChose[0] == opt){
		$("#win").show("slow");
		$("#tie").hide();
	}else{
		$("#lose").show("slow");
	}
}

function tie(){
	$("#tie").show("slow");
}
// WinCondition = [
// 	["O","O","O",3,4,5,6,7,8],
// 	[0,1,2,"O","O","O",6,7,8],
// 	[0,1,2,3,4,5,"O","O","O"],
// 	["O",1,2,"O",4,5,"O",7,8],
// 	[0,"O",2,3,"O",5,6,"O",8],
// 	[0,1,"O",3,4,"O",6,7,"O"],
// 	["O",1,2,3,"O",5,6,7,"O"],
// 	[0,1,"O",3,"O",5,"O",7,8],
// ]


