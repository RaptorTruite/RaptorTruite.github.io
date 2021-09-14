//-- HTML Elements --//
const locationInput = document.querySelector("#LOCATION");
const weatherInfo = document.querySelector("#weatherInfo");

//-- Buttons --//
const validationBtn = document.querySelector("#validationBtn");
const geolocBtn = document.querySelector("#geolocBtn")

//-- OpenWeatherMap Info --//
const weatherToken = "3bbf695264b23a6499e061fea31460f8";
const metricSystem = "units=metric";

//-- IPStack Info --//
const stackToken = "0b42b17fedf977386a0c223e54a930c2"

validationBtn.addEventListener("click", () => {
    getWeather(locationInput.value);
    locationInput.value = "";
});

geolocBtn.addEventListener("click", detectUserIP)

detectUserIP();

function getWeather(city){
    const request = new XMLHttpRequest();

    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherToken}&${metricSystem}&lang=fr`);

    request.onload = () => {
        
        if (request.status === 200){
            let info = JSON.parse(request.responseText);
            showWeather(info);
        }
        else{
            showError(city);
        }
        
    }
    request.send();
}

function showWeather(cityInfo){
    weatherInfo.innerHTML = `
                            <div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h1>Ville : ${cityInfo.name} (${cityInfo.sys.country})</h1>
                                    <img src="http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png">
                                </div>
                                <h3><strong>Temps :</strong> ${cityInfo.weather[0].description}</h3>
                                <h3><strong>Température :</strong> ${cityInfo.main.temp}°C</h3>
                                <h3><strong>Humidité :</strong> ${cityInfo.main.humidity}%</h3>
                                <h3><strong>Vitesse du vent :</strong> ${cityInfo.wind.speed} m/s</h3>
                            </div>
                            `;

    let weather = cityInfo.weather[0].main;
    if (weather == "Clear") {
        document.querySelector(".main").classList.add("sunny");
        document.querySelector(".main").classList.remove("cloudy");
    }
    else if (weather == "Clouds"){
        document.querySelector(".main").classList.remove("sunny");
        document.querySelector(".main").classList.add("cloudy");
    } 
    else{
        document.querySelector(".main").classList.remove("sunny");
        document.querySelector(".main").classList.remove("cloudy");
    }
}

function showError(city){
    weatherInfo.innerHTML = `<p>La ville ${city} n'a pas de donnée</p>`;
}

function detectUserIP(){
    let ip = "";

    const request = new XMLHttpRequest();

    request.open("GET", "https://api.ipify.org");
    
    request.onload = () => {
        if (request.status === 200){
            ip = request.responseText;
            console.log(ip)
            detectUserPosition(ip);
        }
    }
    
    request.send();  
}

function detectUserPosition(ip){

    const request = new XMLHttpRequest();

    request.open("GET", `http://api.ipstack.com/${ip}?access_key=${stackToken}`);
    
    request.onload = () => {
        if (request.status === 200){
            let response = JSON.parse(request.responseText);
            getWeather(response.city)
        }
    
    }
    request.send();
}
