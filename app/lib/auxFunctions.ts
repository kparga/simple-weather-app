/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherData, ForecastedData } from "./definitions";

export function toDate(timestamp: number) {
  const date = new Date(timestamp);
  return date.toDateString().substring(0, date.toDateString().length - 4);
}

export function resultArr(data: WeatherData) {
  try {
    const resultArr = data.list.reduce(
      (
        item: { last: ForecastedData; arr: ForecastedData[][] },
        index: ForecastedData,
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

export function summarizedWeek(resultArr: any[]) {
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
