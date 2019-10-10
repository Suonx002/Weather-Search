const cityInput = document.querySelector('#city-search');
const stateInput = document.querySelector('#state-search');
const weatherForm = document.querySelector('.weather-form');
const weatherResults = document.querySelector('.weather-results');

weatherForm.addEventListener('submit', getData);

function getData(e) {
  const api_key = '2895f439a5e9484f82efcf679f045bd9';
  const city =
    cityInput.value.slice(0, 1).toUpperCase() + cityInput.value.slice(1);
  const state = stateInput.value.toUpperCase();
  fetch(
    `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=${api_key}`
  )
    .then(response => response.json())
    .then(data => data.data[0])
    .then(weather => {
      displayWeather(weather);
      clearInput();
    })
    .catch(err => {
      alert('There is something wrong with the data...');
    });

  e.preventDefault();
}

function displayWeather(weather) {
  const fahrenheit = ((weather.temp * 9) / 5 + 32).toFixed(1);

  //clear results
  weatherResults.innerHTML = '';

  let output = `
    <h4 class="city">${weather.city_name}, <span class="state">${weather.state_code}</span></h4>
    <p class="timezone"><strong>Time Zone:</strong> ${weather.timezone}</p>
    <p class="time"><strong>Current Time:</strong> ${weather.datetime}</p>
    <div class="weather-output">
        <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png" class="icon">
        <p class="weather-desc">
        <strong>Description:</strong> ${weather.weather.description}</p>
        <p class="temp">
        <strong>Degree:</strong>
        ${weather.temp} &#8451; | <span class="fahrenheit">${fahrenheit} &#8457;</span>
        </p>
    </div>
  `;
  weatherResults.insertAdjacentHTML('beforeend', output);
  weatherResults.style.display = 'block';
}

function clearInput() {
  cityInput.value = '';
  stateInput.value = '';
}
