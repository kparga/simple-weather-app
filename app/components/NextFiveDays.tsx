"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WeatherData } from "../lib/definitions";
import { summarizedWeek, resultArr } from "../lib/auxFunctions";

export function NextFiveDays({ city }: { city: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WeatherData>();

  useEffect(() => {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city ? city : "Rio de Janeiro"}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  return (
    <div className="p-2">
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <div className="p-4 bg-white text-black font-semibold border-b  border-zinc-100">
            <h2>Next 5 days</h2>
          </div>
          <div className="flex flex-col divide-y divide-zinc-100">
            {summarizedWeek(resultArr(data!)).map((day) => (
              <div
                className="flex flex-row justify-between items-center bg-white p-2"
                key={day.date}
              >
                <div>
                  <Image
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    width={50}
                    height={50}
                    alt={day.description}
                  />
                </div>
                <div className="justify-items-center">
                  <h3 className="text-zinc-800">{day.date}</h3>
                  <h3 className="text-zinc-400">{day.description}</h3>
                </div>
                <div className="flex flex-row">
                  <h3 className="text-zinc-800 p-2">
                    {Math.round(day.max_temp).toString() + "°"}
                  </h3>
                  <h3 className="text-zinc-800 p-2">
                    {Math.round(day.min_temp).toString() + "°"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
