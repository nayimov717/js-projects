"use strict";
const distanceInput = document.querySelector(".distance__input");
const distanceButton = document.querySelector(".distance__button");
const results = document.querySelector(".results");

const PERSON_SPEED = 3.6;
const BICYCLE_SPEED = 20.1;
const CAR_SPEED = 70;
const PLANE_SPEED = 800;


distanceButton.addEventListener("click", () => {
  const distance = parseFloat(distanceInput.value);
  if (isNaN(distance) || distance <= 0) {
    alert("Iltimos, to'g'ri masofani kiriting.");
    return;
  }
    
  document.getElementById("walk-time").textContent = calculateTime( distance, PERSON_SPEED);
  document.getElementById("bicycle-time").textContent = calculateTime( distance, BICYCLE_SPEED);
  document.getElementById("car-time").textContent = calculateTime(distance, CAR_SPEED);
  document.getElementById("plane-time").textContent = calculateTime( distance, PLANE_SPEED);
});

function calculateTime(distance, speed) {
  const time = distance / speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} soat ${minutes} daqiqa`;
}