import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

function StartSection() {
  const {
    theme,
    playersNumber: number,
    size,
  } = useSelector((store) => store.choices);
  const [activeSelections, setActiveSelections] = useState({
    theme,
    number,
    size,
  });

  const handleSetActive = (role, value) => {
    let finalValue = value;
    if (role !== "theme") {
      const parts = value.split("x");
      finalValue = parseInt(parts[0], 10) * parseInt(parts[1], 10);
    }

    setActiveSelections({
      ...activeSelections,
      [role]: finalValue,
    });
  };

  return (
    <section className="bg-white w-4/5  sm:w-96 p-5 sm:p-7 rounded-2xl">
      <div>
        <h3 className="font-semibold text-neutral-400 mb-1 sm:mb-2 text-xs sm:text-lg">
          Select Theme
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:gap-5 mb-3 sm:mb-5">
          <Button
            role={"theme"}
            isActive={activeSelections.theme === "Numbers"}
            onClick={handleSetActive}
          >
            Numbers
          </Button>
          <Button
            role={"theme"}
            isActive={activeSelections.theme === "Icons"}
            onClick={handleSetActive}
          >
            Icons
          </Button>
        </div>
      </div>
      {/* <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-sm sm:text-lg">
          Number of Players
        </h3>

      <div className="grid grid-cols-4 gap-5 mb-5">
        <Button
          role={"number"}
          isActive={activeSelections.number === 1}
          onClick={handleSetActive}
        >
          1
        </Button>
        <Button
          role={"number"}
          isActive={activeSelections.number === 2}
          onClick={handleSetActive}
        >
          2
        </Button>
        <Button
          role={"number"}
          isActive={activeSelections.number === 3}
          onClick={handleSetActive}
        >
          3
        </Button>
        <Button
          role={"number"}
          isActive={activeSelections.number === 4}
          onClick={handleSetActive}
        >
          4
        </Button>
      </div>
      </div> */}

      <div>
        <h3 className="font-semibold text-neutral-400 mb-1 sm:mb-2 text-xs sm:text-lg">
          Grid Size
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:gap-5 mb-3 sm:mb-5">
          <Button
            role={"size"}
            isActive={activeSelections.size === 16}
            onClick={handleSetActive}
          >
            4x4
          </Button>
          <Button
            role={"size"}
            isActive={activeSelections.size === 36}
            onClick={handleSetActive}
          >
            6x6
          </Button>
        </div>
      </div>
      <Button type="primary" role="start">
        Start Game
      </Button>
    </section>
  );
}
export default StartSection;
