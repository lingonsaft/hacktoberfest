$(document).ready(function(){
  var breakTimeDisplay = 5,  sessionTimeDisplay = 25; 
  //default

  //CountDown session
$("#start").click(function(){
    $("#sessionMinus,#sessionPlus,#breakMinus,#breakPlus,#start").hide();
    $("#status").prepend('<button id="reset">Reset</button>');
    var counter = setInterval(sessionTimer,1000); 
    
    // change to minutes  
    sessionTimeDisplay *= 60;
    breakTimeDisplay *= 60;
 
  function sessionTimer(){
   if(sessionTimeDisplay === 0){
     clearInterval(counter);
     var startBreak = setInterval(breakTimer,1000);
   }else{
   sessionTimeDisplay -= 1;
   if(sessionTimeDisplay%60>=10){ // two ways to display seconds
     $(".displayTime").text(Math.floor(sessionTimeDisplay/60) + ":" + sessionTimeDisplay%60);
   } else{
     $(".displayTime").text(Math.floor(sessionTimeDisplay/60) + ":" +"0"+ sessionTimeDisplay%60);
   }
     }
 
   function breakTimer(){
    $(".displayTitle").text("Break");
    $(".displayTime").text(breakTimeDisplay);
    if(breakTimeDisplay === 0){
      clearInterval(startBreak);
      reset();
    }else{
       breakTimeDisplay -= 1;
       if(breakTimeDisplay%60>=10){
         $(".displayTime").text(Math.floor(breakTimeDisplay/60) + ":" + breakTimeDisplay%60);
        } else{
        $(".displayTime").text(Math.floor(breakTimeDisplay/60) + ":" +"0"+ breakTimeDisplay%60);
      }  
    }

  }
  
  $("#reset").on("click",function(){
    reset();
  });

  function reset(){
  clearInterval(counter);
  clearInterval(startBreak)
  breakTimeDisplay = 5;
  sessionTimeDisplay = 25;
  
  $("#sessionDisplay,.displayTime").text(sessionTimeDisplay);
  $("#sessionMinus,#sessionPlus,#breakMinus,#breakPlus,#start").show();
  $("#reset").hide();
  } 
 } // reset
  }); // on click 'start'

  // Session Length setting
  $("#sessionMinus").on("click",function(){
    if(sessionTimeDisplay > 1){
      minusSession();
      $("#sessionDisplay,.displayTime").text(sessionTimeDisplay);
    } else{
    console.log("error. Time couldn't lower than 1");
      sessionTimeDisplay = 1;
    }
  });
    
  $("#sessionPlus").on("click",function(){
    if(sessionTimeDisplay <= 60){
      plusSession();
      $("#sessionDisplay,.displayTime").text(sessionTimeDisplay);
      
    } else{
      console.log("error. Time couldn't pass 60");
    }    
  });
  
  function plusSession(){
    sessionTimeDisplay += 1;
  };
  
  function minusSession(){
    sessionTimeDisplay -=1;
  }
  
  // break Length setting
  $("#breakMinus").on("click",function(){
    if(breakTimeDisplay > 1){
      minusBreak();
      $("#breakDisplay").text(breakTimeDisplay);
    } else{
    console.log("error. Time couldn't lower than 1");
      breakTimeDisplay = 1;
    }
  });
    
  $("#breakPlus").on("click",function(){
    if(breakTimeDisplay <= 60){
      plusBreak();
      $("#breakDisplay").text(breakTimeDisplay);
    } else{
      console.log("error. Time couldn't pass 60");
    }    
  });
  
  function plusBreak(){
    breakTimeDisplay += 1;
  };
  
  function minusBreak(){
    breakTimeDisplay -=1;
  }
  
 
})