var input = document.querySelector("#input");
var tipAmount = document.querySelector("#output");
var button = document.querySelector("button");
var tipSelect = document.querySelector("#tipSelect");
var tipPercent = 0;
var form = document.querySelector("form");

button.addEventListener("click", calculateTip);

function calculateTip(event) {
    event.preventDefault();
    tipAmount.innerHTML = "You should tip " + "$" + (input.value * tipPercent).toFixed(2);
}

tipSelect.addEventListener("change", storeTip);

function storeTip(event) {
    var num = parseInt(event.target.value)
    tipPercent = (num / 100);
}
form.addEventListener("submit", calculateTip);