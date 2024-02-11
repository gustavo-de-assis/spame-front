"use client"

import React, { useState, useEffect } from "react";

type Item = {
    stopAppointment: boolean;
};

const Stopwatch = (props: Item) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const { stopAppointment } = props;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (stopAppointment) {
        setTime(0);
        setIsRunning(!isRunning);
        return;
    }

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [time, stopAppointment]);
  
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;