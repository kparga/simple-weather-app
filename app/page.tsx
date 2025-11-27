"use client"
import { CityTab } from "@/components/CityTab";
import { LastUpdatedFooter } from "@/components/LastUpdatedFooter";
import { NavBar } from "@/components/Navbar";
import { NextFiveDays } from "@/components/NextFiveDays";
import { NextHour } from "@/components/NextHour";
import { useState } from "react";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('Rio de Janeiro')
  function handleChange(city: string) {
    setSelectedCity(city)
  }

  return (
  <div className="p-4">
    <NavBar/>
    <CityTab cities={['Rio de Janeiro', 'Beijing', 'Los Angeles']} selectedCity={selectedCity}  setSelectedCity={handleChange}/>
    <div className="bg-linear-to-b from-sky-800 via-cyan-300 to-orange-100">
      <NextHour city={selectedCity} />
      <NextFiveDays city={selectedCity}/>
    </div>
    <LastUpdatedFooter/>
  </div>
  );
}
