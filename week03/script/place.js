

const yearElement = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;


const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModified}`;




const tElement = document.querySelector("#temperature");
const wiElement = document.querySelector("#windspeed");
const cElement = document.querySelector("#condition");
const wElement = document.querySelector("#windchill");

const temperature = 10;
const windSpeed = 5;
const conditions = "Partly Cloudy";

function calculateWindChild(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
}

tElement.textContent = temperature;
wiElement.textContent = windSpeed;
cElement.textContent = conditions;

if (temperature <= 10 && windSpeed > 4.8) {
    wElement.textContent = `${calculateWindChild(temperature, windSpeed)}`;
}
else {
    wElement.textContent = "N/A";
}