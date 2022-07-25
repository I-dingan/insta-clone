import React from "react";

function Story({ img, username }) {
  return (
    <div className="">
      <img
        src={img}
        className="h-14 w-14 rounded-full p-[1.5px]
        object-contain cursor-pointer border-2 border-red-500"
      />
      <p
        className="text-xs w-14 truncate text-center
         hover:scale-110 transition transform duration-200s 
         ease-out"
      >
        {username}
      </p>
    </div>
  );
}

export default Story;
