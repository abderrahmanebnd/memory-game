import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { randomNumbersIcons } from "../utils/helpers";

function StartSection() {
  const dispatch = useDispatch();
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

  const items = randomNumbersIcons(
    activeSelections.theme,
    activeSelections.size
  );
  const gridSize = size === 16 ? "4" : "6"; // Corrected gridSize
  console.log(activeSelections.size);
  return (
    <section className="bg-white w-96 p-7 rounded-2xl">
      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Select Theme
        </h3>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"theme"}
            isActive={activeSelections.theme === "Numbers"}
            setActive={handleSetActive}
          >
            Numbers
          </Button>
          <Button
            dispatch={dispatch}
            role={"theme"}
            isActive={activeSelections.theme === "Icons"}
            setActive={handleSetActive}
          >
            Icons
          </Button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Number of Players
        </h3>
        <div className="grid grid-cols-4 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === 1}
            setActive={handleSetActive}
          >
            1
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === 2}
            setActive={handleSetActive}
          >
            2
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === 3}
            setActive={handleSetActive}
          >
            3
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === 4}
            setActive={handleSetActive}
          >
            4
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Grid Size
        </h3>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"size"}
            isActive={activeSelections.size === 16}
            setActive={handleSetActive}
          >
            4x4
          </Button>
          <Button
            dispatch={dispatch}
            role={"size"}
            isActive={activeSelections.size === 36}
            setActive={handleSetActive}
          >
            6x6
          </Button>
        </div>
      </div>
      <Button dispatch={dispatch} type={"primary"}>
        Start Game
      </Button>
      <div className={`mt-6 grid grid-cols-${gridSize} `}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </section>
  );
}
export default StartSection;
