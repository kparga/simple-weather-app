import Image from "next/image";

export default function RefreshButton() {
  function reload() {
    window.location.reload();
  }

  return (
    <div>
      <button className="hover:cursor-pointer" onClick={reload}>
        <div>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/7/7d/Refresh_icon.svg"
            }
            alt={"Reload"}
            width={25}
            height={25}
          />
        </div>
      </button>
    </div>
  );
}
