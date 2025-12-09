/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function NextFiveDays({ city }: { city: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

  //const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9170e0e85794088df319259526c55afd&units=metric`);
  //const data = await res.json();

  function toDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toDateString().substring(0, date.toDateString().length - 4);
  }

  function resultArr(data: any[]) {
    try {
      const resultArr = data.list.reduce(
        (
          item: { last: { dt_txt: string }; arr: any[][] },
          index: { dt_txt: string },
        ) => {
          if (
            typeof item.last === "undefined" ||
            item.last.dt_txt.substring(0, 10) !== index.dt_txt.substring(0, 10)
          ) {
            item.last = index;
            item.arr.push([]);
          }
          item.arr[item.arr.length - 1].push(index);
          return item;
        },
        { arr: [] },
      ).arr;
      return resultArr;
    } catch (error) {
      console.error(error);
    }
  }

  function summarizedWeek(resultArr: any[]) {
    const summary: {
      icon: string;
      date: string;
      description: string;
      max_temp: number;
      min_temp: number;
    }[] = [];
    try {
      resultArr.forEach((element) => {
        const day = {
          icon: element[0].weather[0].icon,
          date: toDate(element[0].dt * 1000 + 86400000),
          description: element[0].weather[0].description,
          max_temp: Math.max(
            ...element.map((o: { main: { temp: any } }) => o.main.temp),
          ),
          min_temp: Math.min(
            ...element.map((o: { main: { temp: any } }) => o.main.temp),
          ),
        };
        summary.push(day);
      });
      summary.shift();
    } catch (error) {
      console.log(error);
    }
    return summary;
  }
  const sum_week = summarizedWeek(resultArr(data));

  return (
    <div className="p-2">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div className="p-4 bg-white text-black font-semibold border-b  border-zinc-100">
            <h2>Next 5 days</h2>
          </div>
          <div className="flex flex-col divide-y divide-zinc-100">
            {sum_week.map((day) => (
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
