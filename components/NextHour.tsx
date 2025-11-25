import Image from "next/image"
import { Key } from "react";


export async function NextHour({ city }: { city: string }) {
    
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9170e0e85794088df319259526c55afd&units=metric&cnt=5`);
    const data = await res.json(); 
    
    return (
        <div className='p-2'>
            <div className='p-4 bg-white text-black font-semibold border-b border-zinc-100'>
                <h2>Next hours</h2>
            </div>
            <div className="flex flex-row justify-around divide-x divide-zinc-100 ">
                 {data.list.map((moment: { dt: Key | null | undefined; main: { temp: number; humidity: string; }; weather: { main: string; icon: string}[]; dt_txt: string; })=> (
                    <div className='bg-white p-2 grow justify-items-center' key={moment.dt}>
                        <h3 className='text-black'>{Math.round(moment.main.temp).toString()+'°'}</h3>
                        <h3 className='text-sky-700'>{moment.main.humidity+'%'}</h3>
                        <Image src={`https://openweathermap.org/img/wn/${moment.weather[0].icon}@2x.png`}
                            width={50}
                            height={50}
                            alt={moment.weather[0].main} /> 
                        <h3 className='text-zinc-400'>{moment.dt_txt.substring(moment.dt_txt.length-8, moment.dt_txt.length-3)}</h3>
                    </div>
                 ))}

            </div>
        </div>
    )
}