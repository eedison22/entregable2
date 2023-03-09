import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState(true);
  const [background, setBackground] = useState();
  const image = [
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/01/17/09/12/sunset-3087790_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/26/19/03/rain-2683964_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/06/25/17/36/rain-1479303_960_720.jpg',
    'https://media.istockphoto.com/id/531174219/es/foto/n%C3%ADvea-alley-en-la-ma%C3%B1ana.jpg?s=1024x1024&w=is&k=20&c=gW-NUStxpyMHQmR_-B4hDsx9tAXczgjG-tmedFNAox4=',
    'https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg',
  ];

  const changeImage = (weather) => {
    if (weather?.weather[0].main === 'Clear') {
      setBackground(0);
    } else if (weather?.weather[0].main === 'Clouds') {
      setBackground(1);
    } else if (weather?.weather[0].main === 'Thunderstorm') {
      setBackground(2);
    } else if (weather?.weather[0].main === 'Drizzle') {
      setBackground(3);
    } else if (weather?.weather[0].main === 'Rain') {
      setBackground(4);
    } else if (weather?.weather[0].main === 'Snow') {
      setBackground(5);
    } else if (weather?.weather[0].main === 'Mist') {
      setBackground(6);
    } else {
      setBackground(7);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coord = { lat: position.coords.latitude, lon: position.coords.longitude };
      const getWeather = async () => {
        try {
          const weather = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${
              coord.lon
            }&appid=0faa16099e29903689ab8374bd02757c${
              units ? '&units=metric' : ''
            }&lang=es`,
          );
          console.log(weather.data);
          setWeather(weather.data);
          changeImage(weather.data);
        } catch (error) {
          console.log(error);
        }
      };
      getWeather();
    });
  }, []);

  return (
    <div
      className="h-full flex flex-col justify-center items-center p-10 text-black body-font font-lato bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image[background]})` }}
    >
      <h1 className="mb-5 text-4xl indent-1 rounded-2xl p-4 bg-white opacity-50">
        {weather?.name}
      </h1>
      <div className="flex flex-wrap gap-5">
        <div className="flex-col border p-4 rounded-2xl bg-white opacity-90">
          <div className="flex flex-row place-content-evenly gap-5">
            <h3 className="flex items-center text-2xl font-light">
              {weather?.weather[0].description}
            </h3>
            <img
              className="flex "
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt={`${weather?.weather[0].main}`}
            />
          </div>
          <div>
            <hr className="border-box border-solid border-1 border-black" />
          </div>
          <div className="flex flex-row gap-8 place-content-evenly mt-5">
            <div>
              <h3 className="text-xl">Max</h3>
              <h2 className="text-4xl font-bold">
                {Math.round(weather?.main.temp_max)}°{units ? 'C' : 'F'}
              </h2>
            </div>
            <div>
              <h3 className="text-xl">Min</h3>
              <h2 className="text-4xl font-bold">
                {Math.round(weather?.main.temp_min)}°{units ? 'C' : 'F'}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit border p-1 rounded-2xl bg-white opacity-75 place-content-evenly">
          <div className="flex">
            <svg
              className="flex place-content-start"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 2048 2048"
            >
              <path fill="currentColor" d="m1024 0l683 2048l-683-683l-683 683L1024 0z" />
            </svg>
            <p className="font-bold flex w-full place-content-end">
              {weather?.wind.deg} °
            </p>
          </div>
          <hr className="border-box border-solid border-1 border-black" />
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="currentColor"
                  d="M10.5 4.5a1 1 0 0 0-.917.6a1.5 1.5 0 1 1-2.75-1.2A4 4 0 1 1 10.5 9.5H5a1.5 1.5 0 1 1 0-3h5.5a1 1 0 1 0 0-2Zm8 4a1 1 0 0 0-.917.6a1.5 1.5 0 0 1-2.75-1.2a4 4 0 1 1 3.667 5.6H3a1.5 1.5 0 0 1 0-3h15.5a1 1 0 1 0 0-2Zm-4.917 10.4a1 1 0 1 0 .917-1.4H8a1.5 1.5 0 0 1 0-3h6.5a4 4 0 1 1-3.666 5.6a1.5 1.5 0 1 1 2.749-1.2Z"
                />
              </g>
            </svg>
            <p className="font-bold flex w-full place-content-end">
              {Math.round(weather?.wind.speed)} {units ? 'Km/h' : 'm/h°'}
            </p>
          </div>
          <hr className="border-box border-solid border-1 border-black" />
          <div className="flex">
            <svg
              className="place-content-start"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14.5 18q.625 0 1.063-.438T16 16.5q0-.625-.438-1.063T14.5 15q-.625 0-1.063.438T13 16.5q0 .625.438 1.063T14.5 18Zm-5.75-.75q.3.3.7.3t.7-.3l5.1-5.1q.3-.3.3-.7t-.3-.7q-.3-.3-.713-.3t-.712.3L8.75 15.825q-.3.3-.3.713t.3.712ZM9.5 13q.625 0 1.063-.438T11 11.5q0-.625-.438-1.063T9.5 10q-.625 0-1.063.438T8 11.5q0 .625.438 1.063T9.5 13Zm2.5 9q-3.175 0-5.588-2.212T4 13.8q0-2.375 1.8-5.15t5.45-6q.15-.125.35-.2t.4-.075q.2 0 .4.075t.35.2q3.65 3.225 5.45 6T20 13.8q0 3.775-2.413 5.988T12 22Z"
              />
            </svg>
            <p className="font-bold flex w-full place-content-end">
              {weather?.main.humidity} %
            </p>
          </div>
        </div>
      </div>
      <button
        className="bg-white py-2 px-6  rounded-3xl mt-8"
        onClick={() => setUnits(!units)}
      >
        Cambiar a {units ? 'F°' : 'C°'}
      </button>
    </div>
  );
};

export default App;
