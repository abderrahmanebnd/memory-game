import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../features/singlePlayer";

function Counter() {
  const dispatch = useDispatch();
  const { time } = useSelector((store) => store.singlePlayer);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //MM:SS
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <h1 className="text-xl font-semibold text-neutral-800 ">{formattedTime}</h1>
  );
}

export default Counter;
