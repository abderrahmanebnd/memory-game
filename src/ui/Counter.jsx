import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../features/singlePlayer";
import { formatTime } from "../utils/helpers";

function Counter() {
  const dispatch = useDispatch();
  const { time } = useSelector((store) => store.singlePlayer);
  const { gameOver } = useSelector((store) => store.game);

  const formattedTime = formatTime(time);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        dispatch(setTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, gameOver]);

  return (
    <time className="text-xl font-semibold text-neutral-800 ">
      {formattedTime}
    </time>
  );
}

export default Counter;
