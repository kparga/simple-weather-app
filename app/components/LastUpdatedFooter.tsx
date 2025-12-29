"use client";
import RefreshButton from "./RefreshButton";

const fechaEnMiliseg = new Date(Date.now());

export function LastUpdatedFooter() {
  return (
    <div className="flex flex-row p-1 bg-sky-950 drop-shadow-md/25 rounded-b-lg justify-end">
      <h4 className="px-1">Last Updated on {fechaEnMiliseg.toString()}</h4>
      <RefreshButton />
    </div>
  );
}
