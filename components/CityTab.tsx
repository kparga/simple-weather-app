"use client"
import { SetStateAction, useState } from "react"

export function CityTab({ cities }: { cities: string[] }) {
    const [selectedCity, setSelectedCity] = useState(cities[0].valueOf())

    function handleClick(element: SetStateAction<string>){
        setSelectedCity(element)
    }
    
    return (
        <div className="flex flex-row justify-between">
            {cities.map((city: string)=> (
                    <div onClick={()=>handleClick(city)} className={`font-bold uppercase grow p-4 bg-white ${city==selectedCity ?'border-b-2 border-pink-500 text-black' :'text-zinc-400'}`} key={city}>
                        <a>{city}</a>
                    </div>
                ))}
        </div>
    )
}