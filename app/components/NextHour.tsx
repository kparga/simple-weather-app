"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ForecastedData, WeatherData } from "../lib/definitions";

export function NextHour({ city }: { city: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WeatherData>();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city ? city : "Rio de Janeiro"}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric&cnt=5`,
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [city]);

  return (
    <div className="p-2">
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <div className="p-4 bg-white text-black font-semibold border-b border-zinc-100">
            <h2>Next hours</h2>
          </div>
          <div className="flex flex-row justify-around divide-x divide-zinc-100 ">
            {data?.list.map((moment: ForecastedData) => (
              <div
                className="bg-white p-2 grow justify-items-center"
                data-testid="moment"
                key={moment.dt}
              >
                <h3 className="text-black">
                  {Math.round(moment.main.temp).toString() + "°"}
                </h3>
                <h3 className="text-sky-700">{moment.main.humidity + "%"}</h3>
                <Image
                  src={`https://openweathermap.org/img/wn/${moment.weather[0].icon}@2x.png`}
                  width={50}
                  height={50}
                  alt={moment.weather[0].main}
                />
                <h3 className="text-zinc-400">
                  {moment.dt_txt.substring(
                    moment.dt_txt.length - 8,
                    moment.dt_txt.length - 3,
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
