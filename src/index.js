import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature is ${Math.floor((response.main.temp - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);
      $('.showDescription').text(`It looks like the weather in ${city} is ${response.weather[0].description}`);
      $('.windSpeed').text(`The wind speed in ${city} is ${response.wind.speed} mph`);
      $('.feelsLike').text(`The feels like temperature in ${city} is ${Math.floor((response.main.feels_like - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);      
    }
  });
});

$(document).ready(function() {
  $('#weatherZipCode').click(function() {
    const zipCode = $('#zipCode').val();
    $('#zipCode').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${zipCode} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature is ${Math.floor((response.main.temp - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);
      $('.showDescription').text(`It looks like the weather in ${zipCode} is ${response.weather[0].description}`);
      $('.windSpeed').text(`The wind speed in ${zipCode} is ${response.wind.speed} mph`);
      $('.feelsLike').text(`The feels like temperature in ${zipCode} is ${Math.floor((response.main.feels_like - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);      
    }
  });
});

$(document).ready(function() {
  $('#weatherLatAndLong').click(function() {
    const latitude = $('#latitude').val();
    const longitude = $('#longitude').val();
    $('#latitude').val("");
    $('#longitude').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity is ${response.daily[2].humidity}%`);
      // $('.showTemp').text(`The temperature is ${Math.floor((response.main.temp - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);
      // $('.showDescription').text(`It looks like the weather in ${zipCode} is ${response.weather[0].description}`);
      // $('.windSpeed').text(`The wind speed in ${zipCode} is ${response.wind.speed} mph`);
      // $('.feelsLike').text(`The feels like temperature in ${zipCode} is ${Math.floor((response.main.feels_like - 273.15) * (9/5) + 32)} degrees Fahrenheit.`);      
    }
  });
});