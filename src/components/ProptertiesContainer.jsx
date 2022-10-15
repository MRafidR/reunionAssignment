import { React } from "react";
import propertyData from "../assets/propertyData/PropertyData";
import PropertyItem from "./PropertyItem";

function ProptertiesContainer({ filterData }) {

  console.log(filterData);
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full md:w-[85%] m-auto gap-4 p-10 min-h-screen">
      {propertyData
        .filter(
          (property) =>
            property.city === (filterData.city) &&
            property.rent <= filterData.rent &&
            property.rooms === filterData.rooms &&
            property.type === filterData.type
        )
        .map((filteredProperty) => (
            <PropertyItem 
            propertyName={filteredProperty.name}
            propertyImage={filteredProperty.image}
            propertyRent={filteredProperty.rent}
            propertyCity={filteredProperty.city}
            propertyRooms={filteredProperty.rooms}
            propertyType={filteredProperty.type}
            />

        ))}
        {
           ( (filterData.rent === null) && (filterData.city === null) && (filterData.rooms === null) && (filterData.type === null)) && 
           propertyData.map((filteredProperty) => (
            <PropertyItem 
            propertyName={filteredProperty.name}
            propertyImage={filteredProperty.image}
            propertyRent={filteredProperty.rent}
            propertyCity={filteredProperty.city}
            propertyRooms={filteredProperty.rooms}
            propertyType={filteredProperty.type}
            />
          ))
        }
    </main>
  );
}

export default ProptertiesContainer;
