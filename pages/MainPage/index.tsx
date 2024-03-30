"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const MainPage = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("Los Angeles");
  const [currentMap, setMap] = useState("LosAngeles");

  useEffect(() => {
    //here we are creating animations
    const firstLocation = document.getElementById("firstLocation");
    const secondLocation = document.getElementById("secondLocation");
    const thirdLocation = document.getElementById("thirdLocation");

    if (firstLocation && secondLocation && thirdLocation && currentMap) {
      const defaultStyling = () => {
        firstLocation.style.background = "white";
        firstLocation.style.color = "black";
      };

      defaultStyling();

      const buttonActive = (buttonName: HTMLElement) => {
        buttonName.style.background = "white";
        buttonName.style.color = "black";
      };
      const buttonInactive = (buttonName: HTMLElement) => {
        buttonName.style.background = "black";
        buttonName.style.color = "white";
      };
      firstLocation.addEventListener("click", () => {
        setCity("Los Angeles");
        setMap("LosAngeles");
        buttonActive(firstLocation);
        buttonInactive(secondLocation);
        buttonInactive(thirdLocation);
      });
      secondLocation.addEventListener("click", () => {
        setCity("New Orleans");
        setMap("NewOrleans");
        buttonActive(secondLocation);
        buttonInactive(thirdLocation);
        buttonInactive(firstLocation);
      });
      thirdLocation.addEventListener("click", () => {
        setCity("San Diego");
        setMap("SanDiego");
        buttonInactive(firstLocation);
        buttonInactive(secondLocation);
        buttonActive(thirdLocation);
      });
    } else {
      console.log("dependencies missing");
    }
  }, []);

  useEffect(() => {
    //here we are requesting weather
    const fetchWeather = async () => {
      try {
        const apiKey = "d0b7abc2b79441ef8e993054241303";
        const lang = "de"; // Language parameter for German
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=${lang}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Fetch initial weather data
    setTimeout(() => {
      fetchWeather();
    }, 1000);

    // Fetch weather data every 30 seconds
    const intervalId = setInterval(fetchWeather, 30000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [weather, city]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between p-[5vw] mx-auto">
      <div className="z-10 w-full items-center justify-between font-SixCaps md:text-[8vw] text-[20vw] mx-auto">
        <div id="kindaHeader" className="md:flex gap-[10vw]">
          <div id="title">CHECK YOUR WEATHER</div>
          <div
            id="menu"
            className="flex md:text-[4vw] text-[10vw] gap-[1vw] mt-[3vw] z-40"
          >
            <div
              id="firstLocation"
              className="z-40 px-[2.5vw] md:h-[6.4vw] h-[15vw] cursor-pointer hover:scale-105 border-black hover:border-white rounded-sm"
            >
              LosAngeles
            </div>
            <div
              id="secondLocation"
              className="z-40 px-[2.5vw] md:h-[6.4vw] h-[15vw] cursor-pointer hover:scale-105 border-black hover:border-white rounded-sm"
            >
              NewOrleans
            </div>
            <div
              id="thirdLocation"
              className="z-40 px-[2.5vw] md:h-[6.4vw] h-[15vw] cursor-pointer hover:scale-105 border-black hover:border-white rounded-sm"
            >
              SanDiego
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div
            id="bodyPart"
            className="md:flex justify-around md:gap-[4.1vw] mt-[-12vw] md:mt-0"
          >
            <div
              id="temperature"
              className="h-[22vw] w-[22vw] text-[60vw] md:text-[23vw]"
            >
              {weather ? <div>{weather.current.temp_c}°C</div> : "..."}
            </div>
            <div
              id="condition"
              className="mt-[52vw] md:mt-[22.5vw] md:text-[4vw] text-[7vw] overflow-hidden"
            >
              {weather ? (
                <div>, &nbsp; {weather.current.condition.text}</div>
              ) : (
                "loading..."
              )}
            </div>
          </div>
          <div id="maps">
            <Image
              id="currentMap"
              className="md:w-[34vw] md:h-[25vw] w-screen h-[220px] md:mt-[3vw] mt-0 mr-[7vw]"
              width={300}
              height={250}
              src={`/maps/${currentMap}.png`}
              alt="map"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
