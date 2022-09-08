const loadApi = async(cityName) =>{
    const apiKey = '8c884e05072d343c38beda833c56c4cd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try{
        const res = await fetch(url);
        const data = await res.json()
        displayWeather(data)
    }
    catch(error) {
       console.log(error)
    }
}


const displayWeather = (data) =>{
    console.log(data)
    const displayTemp = document.getElementById('temp');
    displayTemp.innerText = data.main.temp;
    const displayWeather = document.getElementById('weather');
    displayWeather.innerText = data.weather[0].description;
}


const searchButton = document.getElementById('btn-search');
searchButton.addEventListener('click',()=>{
    const inputField = document.getElementById('input-field');
    const cityName = inputField.value;
    const cityFloat = parseFloat(cityName);
    if(cityName === "" || cityFloat == !isNaN){
        alert('Please enter a valid city')
    }
    else{
        const displayCity = document.getElementById('city');
        displayCity.innerText = cityName;
        loadApi(cityName);
    }
})

