import Image from "next/image";
import React from "react";

export default function BasicCard() {
  return (
    <div>
      
      <div>
        <Image
         src={'https://media.easemytrip.com/media/Blog/India/637870903728666071/637870903728666071B4iTsT.jpg'}
          height={40} width={90} 
          alt="Picture of the card"
          className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className=" text-lg font-semibold text-gray-700">Card Title</h2>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Learn More</button>
        </div> 
      </div>
    </div>
  );
}
