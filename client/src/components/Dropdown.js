import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [image, setImage] = useState(props.List[0].img);

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSelectItem = (img) => {
    setImage(img);
    setShowDropDown(false);
  };
  return (
    <div className="dropdown w-[50%] h-[40px] flex justify-center items-center">
      <button
        className="w-[50px] h-[30px] flex justify-between items-center"
        onClick={handleDropDown}
      >
        <img className="w-[30px] h-[30px]" src={image} alt="US" />
        <FaChevronDown className="w-[10px] h-[30px] text-[10px]" />
      </button>

      <div
        className={`w-[50px] h-[110px] bg-[#ccc] absolute z-10 top-[40px]
            ${showDropDown ? "visible" : "hidden"}
          `}
      >
        <ul>
          {props.List.map((items, index) => (
            <li
              key={index}
              className="flex justify-center items-center hover:bg-[#2F3C7E]"
            >
              <a href={items.link} className="w-[30px] h-[30px] mt-[5px]">
                <button onClick={() => handleSelectItem(items.img)}>
                  <img className="w-[30px] h-[30px]" src={items.img} alt="" />
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
