// Global Variables

const apiKey = "&appid=e1ebc1406cdd10c6e0e918118b86cc29";
const apiGeocoding =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apiForecast =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
const searchBox = document.querySelector("input");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
const today = new Date();

function currentWeather(city) {
  event.preventDefault();
  console.log(city);
  //Fetchest current day forecast api
  fetch(apiGeocoding + city + apiKey)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather not found.");
      }
      return response.json();
    })
    .then((data) => {
      //Current Day Forecast
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temperature").innerHTML =
        Math.round(data.main.temp) + "°F";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
      document.querySelector(".current-date") === today;

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/images/mist.png";
      }
      //Fetches the 5 day forecast API
      fetch(apiForecast + city + apiKey)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Forecast not Found.");
          }
          return response.json();
        })
        .then(function (response) {
          //Day 1 Forecast
          var dayOne = document.querySelector(".day-one-icon");
          if (response.list[0].weather[0].main == "Clouds") {
            dayOne.src = "./assets/images/clouds.png";
          } else if (response.list[0].weather[0].main == "Clear") {
            dayOne.src = "./assets/images/clear.png";
          } else if (response.list[0].weather[0].main == "Rain") {
            dayOne.src = "./assets/images/rain.png";
          } else if (response.list[0].weather[0].main == "Drizzle") {
            dayOne.src = "./assets/images/drizzle.png";
          } else if (response.list[0].weather[0].main == "Mist") {
            dayOne.src = "./assets/images/mist.png";
          }

          document.querySelector(".day-one-temperature").innerHTML =
            Math.round(response.list[0].main.temp) + "°F";
          document.querySelector(".day-one-humidity").innerHTML =
            response.list[0].main.humidity + "%";
          document.querySelector(".day-one-date").innerHTML =
            response.list[0].dt_txt;

          //Day 2 Forecast
          var dayTwo = document.querySelector(".day-two-icon");

          if (response.list[1].weather[0].main == "Clouds") {
            dayTwo.src = "./assets/images/clouds.png";
          } else if (response.list[1].weather[0].main == "Clear") {
            dayTwo.src = "./assets/images/clear.png";
          } else if (response.list[1].weather[0].main == "Rain") {
            dayTwo.src = "./assets/images/rain.png";
          } else if (response.list[1].weather[0].main == "Drizzle") {
            dayTwo.src = "./assets/images/drizzle.png";
          } else if (response.list[1].weather[0].main == "Mist") {
            dayTwo.src = "./assets/images/mist.png";
          }

          document.querySelector(".day-two-temperature").innerHTML =
            Math.round(response.list[1].main.temp) + "°F";
          document.querySelector(".day-two-humidity").innerHTML =
            response.list[1].main.humidity + "%";
          document.querySelector(".day-two-date").innerHTML =
            response.list[1].dt_txt;

          //Day 3 Forecast
          var dayThree = document.querySelector(".day-three-icon");

          if (response.list[2].weather[0].main == "Clouds") {
            dayThree.src = "./assets/images/clouds.png";
          } else if (response.list[2].weather[0].main == "Clear") {
            dayThree.src = "./assets/images/clear.png";
          } else if (response.list[2].weather[0].main == "Rain") {
            dayThree.src = "./assets/images/rain.png";
          } else if (response.list[2].weather[0].main == "Drizzle") {
            dayThree.src = "./assets/images/drizzle.png";
          } else if (response.list[2].weather[0].main == "Mist") {
            dayThree.src = "./assets/images/mist.png";
          }

          document.querySelector(".day-three-temperature").innerHTML =
            Math.round(response.list[2].main.temp) + "°F";
          document.querySelector(".day-three-humidity").innerHTML =
            response.list[2].main.humidity + "%";
          document.querySelector(".day-three-date").innerHTML =
            response.list[2].dt_txt;

          //Day 4 Forecast
          var dayFour = document.querySelector(".day-four-icon");

          if (response.list[3].weather[0].main == "Clouds") {
            dayFour.src = "./assets/images/clouds.png";
          } else if (response.list[3].weather[0].main == "Clear") {
            dayFour.src = "./assets/images/clear.png";
          } else if (response.list[3].weather[0].main == "Rain") {
            dayFour.src = "./assets/images/rain.png";
          } else if (response.list[3].weather[0].main == "Drizzle") {
            dayFour.src = "./assets/images/drizzle.png";
          } else if (response.list[3].weather[0].main == "Mist") {
            dayFour.src = "./assets/images/mist.png";
          }

          document.querySelector(".day-four-temperature").innerHTML =
            Math.round(response.list[3].main.temp) + "°F";
          document.querySelector(".day-four-humidity").innerHTML =
            response.list[3].main.humidity + "%";
          document.querySelector(".day-four-date").innerHTML =
            response.list[3].dt_txt;

          //Day 5 forecast
          var dayFive = document.querySelector(".day-five-icon");

          if (response.list[4].weather[0].main == "Clouds") {
            dayFive.src = "./assets/images/clouds.png";
          } else if (response.list[4].weather[0].main == "Clear") {
            dayFive.src = "./assets/images/clear.png";
          } else if (response.list[4].weather[0].main == "Rain") {
            dayFive.src = "./assets/images/rain.png";
          } else if (response.list[4].weather[0].main == "Drizzle") {
            dayFive.src = "./assets/images/drizzle.png";
          } else if (response.list[4].weather[0].main == "Mist") {
            dayFive.src = "./assets/images/mist.png";
          }

          document.querySelector(".day-five-temperature").innerHTML =
            Math.round(response.list[4].main.temp) + "°F";
          document.querySelector(".day-five-humidity").innerHTML =
            response.list[4].main.humidity + "%";
          document.querySelector(".day-five-date").innerHTML =
            response.list[4].dt_txt;

          //attempt to add localstorage to a list
          let searchList = searchBox.value;

          let searchListJsn = JSON.stringify(searchList);

          localStorage.setItem("locations", searchListJsn);

          for (var i = 0; i < localStorage.length; i++) {
            document
              .querySelector(".city-list")
              .append(localStorage.getItem(localStorage.key(i)));
          }
        });
    });
}

//Calls the currentWeather function when you click the button
searchBtn.addEventListener("click", () => {
  currentWeather(searchBox.value);
});
