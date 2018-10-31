//Fidel Lim 5847485
//Part 1 of Assignment 3 CSIT128
function calculate(){
  var int = document.getElementById('int').value;
  var text = "";
  var text1 = "";
  var i;
  for (i = 1; i < 10; i++) {
    text += int+ " x " + i + " = " + int*i +"<br>"+"<br>";
  }
  for (i = 1; i < 10; i++) {
    text1 += "<li>"+ int+ " x " + i + " = " + int*i +"</li>"+"<br>";
  }
  var exp = /^[1-9]$/;
  if (exp.test(int)) {
    document.getElementById("table1").innerHTML= text;
    document.getElementById("table2").innerHTML= "<ul>"+text1+"</ul>";
    document.getElementById("bothTables").style.height = "335px";
  }else {
    document.getElementById("table1").innerHTML = "";
    document.getElementById("table2").innerHTML=  "";
    document.getElementById("bothTables").style.height = "0px";
    alert("Please enter a number between 1 and 9");
  }

}

//Part 2 of Assignment 3 CSIT128
//Global Variables
var a = 0;
var b = 0;
var c = 0;
var number1 =0;
var number2 =0;
var number3=0;
var rand  = 0;
var change = 0;
var x = 0;
var score = 0;
var exp = /^[0-9]$/;

function start(){
  document.getElementById("number1").disabled = false;
  document.getElementById("number2").disabled = false;
  document.getElementById("number3").disabled = false;
    score = 0;
    x = 0;
    x = prompt("Choose a number between 0 and 9");
    if (exp.test(x)) {
      rand  = function(){
        a= Math.floor(Math.random() * 10);
        b= Math.floor(Math.random() * 10);
        c= Math.floor(Math.random() * 10);
       number1 = document.getElementById('number1').innerHTML = a;
       number2 = document.getElementById('number2').innerHTML = b;
       number3 = document.getElementById('number3').innerHTML = c;
     };
      change = setInterval(rand, 1000);
      document.getElementById('chooseNumber').innerHTML = "Your chosen number is: ";
      document.getElementById('chosen').innerHTML = x;
      document.getElementById('chosen').style.color="green";
      document.getElementById('scoreSoFar').innerHTML = "Your score so far: ";
      document.getElementById('score').innerHTML = score;
      document.getElementById('score').style.color="red";
      document.getElementById("start").disabled = true;
    }else {
      alert('Please enter a number between 0 and 9');
      score = 0;
      x = 0;
      document.getElementById('chooseNumber').innerHTML = "Your chosen number is: ";
      document.getElementById('chosen').innerHTML = "Invalid";
      document.getElementById('chosen').style.color="green";
      document.getElementById('scoreSoFar').innerHTML = "Your score so far: ";
      document.getElementById('score').innerHTML = score;
      document.getElementById('score').style.color="red";
      document.getElementById('number1').innerHTML = "";
      document.getElementById('number2').innerHTML = "";
      document.getElementById('number3').innerHTML = "";
      document.getElementById("start").disabled = false;
    }
}

function stop(){
  clearInterval(change);
  document.getElementById("start").disabled = false;
  document.getElementById("number1").disabled = true;
  document.getElementById("number2").disabled = true;
  document.getElementById("number3").disabled = true;
}

function shuffleNumbers(){
  if(x==number1 | x==number2 | x==number3){
    score++;
    document.getElementById('score').innerHTML= score;
  }else{
    score--;
    document.getElementById('score').innerHTML= score;
  }
}
