function expandDoggo(){
     let doggoElement = document.getElementById("doggo");
     if(doggoElement.style.height === "0px"){
          doggoElement.style.height = "400px";
     }
     else{
          doggoElement.style.height = "0";
     }
}