"use client";

const fechaEnMiliseg = new Date(Date.now());

export function LastUpdatedFooter() {
  return (
    <div>
      <div className="p-1 bg-sky-950 drop-shadow-md/25 rounded-b-lg justify-items-end">
        <h4 className="">Last Updated on {fechaEnMiliseg.toString()}</h4>
      </div>
    </div>
  );
}
