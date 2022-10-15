import { React, useState, useRef, useEffect } from "react";

function FilterList({ filterInput }) {
  const [applyFilter, setApplyFilter] = useState(false);

  const typeInputRef = useRef();
  const noOfRoomsInputRef = useRef();
  const priceInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setApplyFilter(true);
  };

  useEffect(() => {
    if (applyFilter) {
      const inputData = {
        rent: parseInt(priceInputRef.current.value),
        rooms: parseInt(noOfRoomsInputRef.current.value),
        type: typeInputRef.current.value,
        city: cityInputRef.current.value,
      };
      filterInput(inputData);
      setApplyFilter(false);
    }
  }, [applyFilter,filterInput]);
  

  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-center items-center md:h-20 w-[100%] md:w-[80%] bg-[#d7d7d7] m-auto md:rounded-2xl">
        <div className="flex w-[95%] justify-between flex-col gap-1 md:flex-row md:gap-0">
          <div className="flex flex-col gap-1">
            <label htmlFor="propertyType">House Type</label>
            <select
              name="propertyType"
              id="propertyType"
              placeholder="select"
              ref={typeInputRef}
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="propertyType">Number of rooms</label>
            <input
              type="number"
              defaultValue={2}
              ref={noOfRoomsInputRef}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="price">Price</label>
            <input
              type="range"
              min="10000"
              max="60000"
              step="1000"
              id="price"
              ref={priceInputRef}
               defaultValue="20000" 
            />
            <div className="flex flex-row w-full justify-between text-[0.7rem] mt-[-8px]">
              <p>10k</p>
              <p>60k</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="city">City</label>
            <select
              name="city"
              id="city"
              ref={cityInputRef}
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#383838] text-[white] p-3 rounded-xl"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </form>
  );
}

export default FilterList;
