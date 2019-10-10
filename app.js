const weatherBtn = document.querySelector('.weather-btn');
// 2895f439a5e9484f82efcf679f045bd9

weatherBtn.addEventListener('click', () => {
  fetch(
    `https://api.weatherbit.io/v2.0/current?city=Shakopee,MN&key=2895f439a5e9484f82efcf679f045bd9`
  )
    .then(res => res.json())
    .then(data => data.data[0])
    .then(data => console.log(data));
});
