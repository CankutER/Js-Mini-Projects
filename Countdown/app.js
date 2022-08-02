const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currDate = new Date();
const giveawayDate = new Date(2024, 4, 14, 8, 00);
const giveaway = document.querySelector(".giveaway");

giveaway.textContent = `Giveaway Ends on ${
  weekdays[giveawayDate.getDay()]
}, ${giveawayDate.getDate()} ${
  months[giveawayDate.getMonth()]
} ${giveawayDate.getFullYear()}, ${giveawayDate.getHours()}:${giveawayDate.getMinutes()}0am`;

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const giveawayMsec = giveawayDate.getTime();
const currDateMsec = currDate.getTime();

function countdown() {
  const currDate = new Date();
  const currDateMsec = currDate.getTime();
  const timeDiff = giveawayMsec - currDateMsec;
  if (timeDiff > 0) {
    const daysDiff = timeDiff / 86400000;

    const hourDiff = ((daysDiff - Math.floor(daysDiff)) * 86400000) / 3600000;
    const minDiff = ((hourDiff - Math.floor(hourDiff)) * 3600000) / 60000;
    const secDiff = ((minDiff - Math.floor(minDiff)) * 60000) / 1000;

    days.textContent = Math.floor(daysDiff);
    hours.textContent = Math.floor(hourDiff);
    mins.textContent = Math.floor(minDiff);
    secs.textContent = Math.floor(secDiff);
  } else {
    days.textContent = 0;
    hours.textContent = 0;
    mins.textContent = 0;
    secs.textContent = 0;
  }
}
countdown();

setInterval(countdown, 50);
