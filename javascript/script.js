function updateTime() {

// New York

let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
}

// Sydney

let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}

// Madrid 

let madridElement = document.querySelector("#madrid");
if (madridElement) {
let madridDateElement = madridElement.querySelector(".date");
let madridTimeElement = madridElement.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");

madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("h:mm:ss [<small>]A[</small>]");
}
}
// Paris

// let parisElement = document.querySelector("#paris");
// if (parisElement) {
// let parisDateElement = parisElement.querySelector(".date");
// let parisTimeElement = parisElement.querySelector(".time");
// let parisTime = moment().tz("Europe/Paris");

// parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
// parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
// }
// }

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
          <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
              <div class="homepage">
        <a href="index.html">Back to homepage</ a>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

