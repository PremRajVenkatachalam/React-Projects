import { useEffect, useState } from 'react'
import './App.css'
import snow from './assets/Images/snow1.png'
import humidityIcon from './assets/Images/humidity.png'
import windIcon from './assets/Images/wind.png'
import clearIcon from './assets/Images/clearsky.png'
import cloudy from './assets/Images/cloudy.png'
import drizzle from './assets/Images/drizzle.png'
import rain from './assets/Images/rain.png'


const WeatherDetails = ({icon, temp, city, country, lat, log, humidity, wind}) =>{
  return(
    <>
    <div className='image'>
      <img src={icon} alt='snow'/>
    </div>
    <div className='temp'>{temp}°C</div>
    <div className='location'>{city}</div>
    <div className='country'>{country}</div>
    <div className='cord'>
      <div>
        <span className='lat'>Latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className='log'>Longitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className='data-container'>
      <div className='element'>
        <img src={humidityIcon} alt='humidity' className='icon'/>
        <div className='data'>
          <div className='humidity-percent'>{humidity}%</div>
          <div className='text'>Humidity</div>        
        </div>
      </div>
      <div className='element'>
        <img src={windIcon} alt='wind' className='icon'/>
        <div className='data'>
          <div className='wind-percent'>{wind} km/h</div>
          <div className='text'>Wind Speed</div>        
        </div>
      </div>
    </div>
    </>
  )
}



function App() {
     let apiKey = "76941df7cc206ac053917d4cf1e1f9e0"
  
  const[text, setText] = useState("Chennai");
  const[icon, setIcon] = useState(snow);
  const[temp, setTemp] = useState(0);
  const[city, setCity] = useState("");
  const[country, setCountry] = useState("");
  const[lat, setLat] = useState(0);
  const[log, setLog] = useState(0);
  const[humidity, setHumidity] = useState(0);
  const[wind, setWind] = useState(0);
  const[loading, setLoading] = useState(false);
  const[cityNotFound, setCityNotFound] = useState(false);
  const[error , setError] = useState(null);


  const weatherIconMap = {
    "01d" : clearIcon,
    "01n" : clearIcon,
    "02d" : cloudy,
    "02n" : cloudy,
    "03d" : drizzle,
    "03n" : drizzle,
    "04d" : drizzle,
    "04n" : drizzle,
    "09d" : rain,
    "09n" : rain,
    "10d" : rain,
    "10n" : rain,
    "13d" : snow,
    "13n" : snow,
  }


  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`
  
    try{
      let res = await fetch(url);
      let data = await res.json();
      if(data.cod === "404"){
        console.error("City not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || snow);
      setCityNotFound(false);

    }catch(error){
      console.error("An Error Occured : ", error.message);
      setError("An error occured while fetching data.");
    }finally{
      setLoading(false);
    }
  
  };

  const handlecity = (e) =>{
    setText(e.target.value);
  };
  const handlekeydown = (e) =>{
    if(e.key === "Enter"){
      search();
    }
  }; 
   
  useEffect(function() {
    search();
  }, []);

  return (
    <>
      <div className='container'>
      <div className='input-container'>
        <input className='cityInput' type='text' placeholder='Search City' 
        onChange={handlecity} value={text} onKeyDown={handlekeydown}/>
        <div className='searchimage' onClick={() => search()}>
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjEgMyBDIDExLjYwMTU2MyAzIDQgMTAuNjAxNTYzIDQgMjAgQyA0IDI5LjM5ODQzOCAxMS42MDE1NjMgMzcgMjEgMzcgQyAyNC4zNTU0NjkgMzcgMjcuNDYwOTM4IDM2LjAxNTYyNSAzMC4wOTM3NSAzNC4zNDM3NSBMIDQyLjM3NSA0Ni42MjUgTCA0Ni42MjUgNDIuMzc1IEwgMzQuNSAzMC4yODEyNSBDIDM2LjY3OTY4OCAyNy40MjE4NzUgMzggMjMuODc4OTA2IDM4IDIwIEMgMzggMTAuNjAxNTYzIDMwLjM5ODQzOCAzIDIxIDMgWiBNIDIxIDcgQyAyOC4xOTkyMTkgNyAzNCAxMi44MDA3ODEgMzQgMjAgQyAzNCAyNy4xOTkyMTkgMjguMTk5MjE5IDMzIDIxIDMzIEMgMTMuODAwNzgxIDMzIDggMjcuMTk5MjE5IDggMjAgQyA4IDEyLjgwMDc4MSAxMy44MDA3ODEgNyAyMSA3IFoiPjwvcGF0aD4KPC9zdmc+"
        />
      </div>
      </div>
    
      {loading && <div className='loading-message'>Loading...</div>}
      {error && <div className='error-message'>{error}</div>}
      {cityNotFound && <div className='city-not-found'>City not found</div>}

      {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} 
      country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}
      

      </div>
    </>
  )
}

export default App
