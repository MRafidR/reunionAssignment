import React from 'react'

function PropertyItem({propertyName,propertyImage, propertyRent,propertyRooms, propertyType, propertyCity}) {
  return (
    <div
            key={propertyName}
            className="w-full h-[300px] bg-[#dedede] p-4 flex flex-col items-center hover:scale-105 ease-in duration-200 rounded-md"
          >
            <img
              src={propertyImage}
              className="h-[175px] w-full object-cover"
              alt="propertyImage"
            />
            <h1 className=" font-extrabold text-[#50c92b]">
              {propertyRent} /month
            </h1>
            <h2 className=" font-bold text-[1.4rem]">
              {propertyName}
            </h2>
            <div className="flex w-full justify-center gap-2">
              <h3>{propertyRooms}bedroom </h3>
              <p>{propertyType}</p>
            </div>
            <p>{propertyCity}</p>
          </div>
  )
}

export default PropertyItem