$(document).ready(function(){
  $(".paper").mousedown(function(){
    $(".left-eye").css("height", "1px");
  });
  $(".paper").mouseup(function(){
    $(".left-eye").css("height", "30px")
  });
});
