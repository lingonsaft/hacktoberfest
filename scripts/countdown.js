const endOfHackathon = new Date("Oct 31, 2018 23:59:59").getTime();
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function updateTime() {
  let dateNow = new Date().getTime();
  let timeLeft = endOfHackathon - dateNow;

  document.getElementById("days").innerText = Math.floor(timeLeft / day);
  document.getElementById("hours").innerText = Math.floor(
    (timeLeft % day) / hour
  );
  document.getElementById("minutes").innerText = Math.floor(
    (timeLeft % hour) / minute
  );
  document.getElementById("seconds").innerText = Math.floor(
    (timeLeft % minute) / second
  );
}
updateTime();
setInterval(updateTime, second / 4);
