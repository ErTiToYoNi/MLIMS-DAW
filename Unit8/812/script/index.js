function main() {
  let lat = 38.8196700;//Math.random() * (90)+0;  
  let lon = -0.0340600;//Math.random() * (360)-180;
  console.log(` ${lat}  ${lon}`);

  let API_key = "e402c3f9a5fd952119f647bc002cb83e";
  let units = "metric";
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=${units}&mode=xml`;

  let divdata = document.querySelector("#data"); 
  let paraph = document.createElement('p');
  let paraph2 = document.createElement('p');
  let paraph3 = document.createElement('p');
  let paraph4 = document.createElement('p');
  let nombre = document.querySelector('span');

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        let parser = new DOMParser();
        let api = parser.parseFromString(result, 'text/xml');

        let city = api.querySelector("city");
        let temp = api.querySelector("temperature");
        let valuetemp = temp.getAttribute("value");
        let weather = api.querySelector("weather");
        let valueWeather = weather.getAttribute("value");
        let wind = api.querySelector("wind");
        let speed = wind.querySelector("speed");
        let valuespeed = speed.getAttribute("value");
        let direction = wind.querySelector("direction");
        let valuedirection = direction.getAttribute("value");

   
        nombre.innerHTML = city.getAttribute("name");
        paraph.innerHTML = Date(api);
        paraph2.innerHTML = "TEMP: "+ valuetemp + "°C";
        paraph3.innerHTML = "Weather Conditions : "+ valueWeather; 
        paraph4.innerHTML = "Wind Velocity: " + valuespeed + " m/s and direction: "+valuedirection +"°";

        console.log(api);
     });

   divdata.append(paraph);
   divdata.append(paraph2);
   divdata.append(paraph3);
   divdata.append(paraph4);

}

document.addEventListener('DOMContentLoaded', main);
