import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCloud } from 'react-icons/fa';
import img1 from '../assets/img1.jpeg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosSunny } from 'react-icons/io';
import { BsFillCloudsFill } from 'react-icons/bs';

const Wather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Calicut');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.post('http://localhost:3000/graphql', {
          query: `
            query {
              getWeather(city: "${city}") {
                temperature
                description
                humidity
                windSpeed
              }
            }
          `
        });
        console.log(response)
        setWeather(response.data.data.getWeather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-wrap justify-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="w-11/12 h-screen">
        <div className="w-full flex flex-col md:flex-row h-full items-center gap-4">
          <div className="w-full md:mt-0 mt-5 md:w-1/3 h-[400px] max-w-xs md:max-w-md p-3 rounded-2xl text-center bg-[#f7d698] border-gray-200 shadow-lg flex flex-col items-center justify-between">
            <div className="flex items-center justify-center">
              <p className="text-3xl">Today</p>
              <RiArrowDropDownLine size={24} />
            </div>
            <div className="flex items-center justify-center flex-1">
              {weather ? (
                <>
                  <IoIosSunny size={48} />
                  <h1 className="text-6xl font-bold ml-4">{weather.temperature}°</h1>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <h1 className="text-center text-lg md:text-2xl mt-4 font-bold">
              {weather ? weather.description : 'Loading...'}
            </h1>
            <p className="text-lg md:text-2xl mt-4">{city}</p>
            <p className="text-base md:text-xl mt-4">21, October</p>
          </div>

          <div className="w-full md:w-8/12 h-auto p-4">
            <div className="w-full md:w-3/4 rounded-xl p-3 bg-[#f7d698] bg-opacity-40 border-gray-100">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap justify-center gap-3">
                  {[...Array(4)].map((x, index) => (
                    <div
                      key={index}
                      className="text-white sm:w-24 md:w-28 lg:w-20 p-2 flex flex-col items-center justify-center rounded-lg"
                    >
                      <p className="text-xs md:text-sm font-bold">Now</p>
                      <div className="flex items-center">
                        <FaCloud className="text-white w-4 h-4 md:w-6 md:h-6 mr-1" />
                        <p className="text-sm md:text-base">25*</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full border-t border-white my-3" />
                <div className="flex flex-wrap justify-center gap-3">
                  {[...Array(4)].map((x, index) => (
                    <div
                      key={index}
                      className="text-white sm:w-24 md:w-28 lg:w-20 p-2 flex flex-col items-center justify-center rounded-lg"
                    >
                      <p className="text-xs md:text-sm font-bold">Now</p>
                      <div className="flex items-center">
                        <FaCloud className="text-white w-4 h-4 md:w-6 md:h-6 mr-1" />
                        <p className="text-sm md:text-base">25*</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-9/12 h-auto p-4">
              <p className="text-xl md:text-2xl text-white mb-2">Random Text</p>
              <p className="text-s md:text-lg text-white">
                Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed picture men ask.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wather;
