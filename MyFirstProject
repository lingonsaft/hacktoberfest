function makeGrid() {
  $("#pixelCanvas")
    .children()
    .remove();
  // put inthe grid variables
  var y = $("#inputHeight").val();
  var x = $("#inputWeight").val();

  //create grid
  for (let h = 0; h < y; h++) {
    $("#pixelCanvas").append(`<tr id='cellRow${h}'></tr>`);
    for (let w = 0; w < x; w++) {
      $(`#cellRow${h}`).append("<td></td>");
    }
  }
}

//get the colors
function paint() {
  $(this).css("background-color", $("#colorPicker").val());
}

//prevent a refresh
$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});

$("#pixelCanvas").on("click", "td", paint);