import { CityTab } from "@/components/CityTab";
import { LastUpdatedFooter } from "@/components/LastUpdatedFooter";
import { NavBar } from "@/components/Navbar";
import { NextFiveDays } from "@/components/NextFiveDays";
import { NextHour } from "@/components/NextHour";

export default function Home() {
  return (
  <div className="p-4">
    <NavBar/>
    <CityTab cities={['Rio de Janeiro', 'Beijing', 'Los Angeles']}/>
    <div className="bg-linear-to-b from-sky-800 via-cyan-300 to-orange-100">
      <NextHour city="London" />
      <NextFiveDays city="London"/>
    </div>
    <LastUpdatedFooter/>
  </div>
  );
}
