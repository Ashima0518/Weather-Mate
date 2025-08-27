import React, {useEffect} from 'react';
import MainPage from './components/mainPage';
//import {getPosts} from './app/api';
import PostCards from './components/PostCards';
import './App.css';
import { weatherApi } from './app/api';


function App() {
  const user = "Welcome"; // Example user name
  // const [data, setData] = React.useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => {
  //     setData(posts);
  //   });
  // }, []);


  const [weatherData, setWeatherData] = React.useState(null);

  useEffect(() => {
    weatherApi(44.34, 10.99).then((data) => {
      setWeatherData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="app-container">
      <h1 className="main-heading">Weather Mate</h1>
      <MainPage user={user} />
      {
        weatherData
          ? <PostCards weatherData={weatherData} />
          : <p className="loading-text">Loading weather data...</p>
      }
    </div>
  );
}

export default App;
