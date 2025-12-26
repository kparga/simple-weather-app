export function CityTab({
  cities,
  selectedCity,
  setSelectedCity,
}: {
  cities: string[];
  selectedCity: string;
  setSelectedCity: (arg0: string) => void;
}) {
  function handleClick(element: string) {
    setSelectedCity(element);
  }

  return (
    <div className="flex flex-row justify-between">
      {cities.map((city: string) => (
        <div
          onClick={() => handleClick(city)}
          className={`font-bold uppercase grow p-4 bg-white ${city == selectedCity ? "border-b-2 border-pink-500 text-black" : "text-zinc-400"}`}
          key={city}
        >
          <a>{city}</a>
        </div>
      ))}
    </div>
  );
}
