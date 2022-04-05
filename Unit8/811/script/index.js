function main() {
  let lat = Math.random() * (90-0)+0;  
  let lon = Math.random() * (180-180)+100;
  let API_key = "e402c3f9a5fd952119f647bc002cb83e";
  let units = "metric";
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=${units}`;

  let divdata = document.querySelector("#data"); 
  let paraph = document.createElement('p');
  let paraph2 = document.createElement('p');
  let paraph3 = document.createElement('p');
  let paraph4 = document.createElement('p');
  let nombre = document.querySelector('span');

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        let api = JSON.parse(result);

        let weather = api.weather[0].main;
        let wind = api.wind;
        let temp = api.main.temp;
        let name = api.name;
      
        
        nombre.innerHTML = name;
        paraph.innerHTML = Date(api);
        paraph2.innerHTML = "TEMP: "+ temp + "°C";
        paraph3.innerHTML = "Weather Conditions : "+ api.weather[0].main; 
        paraph4.innerHTML = "Wind Velocity: " + wind.speed + " m/s and direction: "+wind.deg +"°";

        console.log(api);
     });

   divdata.append(paraph);
   divdata.append(paraph2);
   divdata.append(paraph3);
   divdata.append(paraph4);

}

document.addEventListener('DOMContentLoaded', main);
