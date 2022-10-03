let city = document.getElementById('txt');
let btn = document.getElementById('search-btn');
let card = document.getElementById("weather-card")
let url;
let key='18c9ce84016bf39727c21562ee799c1e';

function searchQuery(data){
    let searchQuery= txt.value;
    console.log(searchQuery)
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${key}`;
fetch(url).then((res)=>{
    res.json().then((data)=>{
        console.log(data);
        let html = `<div class="div">
       
    <h1 id="name">${data.name}</h1>
    <div class="weather-card" id="weather-card"><b><span class="min">Min.Temprature: ${data.main.temp_min - 273} C</span>
    <span class="max">Max.Temprature: ${data.main.temp_max - 273} C</span></b></div>
    <b> <span class="wind">Wind Speed: ${data.wind.speed} mph</span></b>
  </div>`
  card.innerHTML=html;

    })
})
    

}
