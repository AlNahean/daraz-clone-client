import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [countdownValue, setCountDownValue] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

  //   let futureDate = new Date(2021, 12, 12, 7, 30, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  //   giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    setCountDownValue({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }

  useEffect(() => {
    let countdown = setInterval(getRemaindingTime, 500);
    //set initial values
    getRemaindingTime();

    return () => clearInterval(countdown);
  }, []);

  function minTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }
  return (
    <div className="flash-sale-header-countdown">
      <div className="fs-bar-1 fs-bar center">
        {minTwoDigits(countdownValue.hours)}
      </div>
      <div className="fs-e-1 fs-e center">:</div>
      <div className="fs-bar-2 fs-bar center">
        {minTwoDigits(countdownValue.minutes)}
      </div>
      <div className="fs-e-2 fs-e center">:</div>
      <div className="fs-bar-3 fs-bar center">
        {minTwoDigits(countdownValue.seconds)}
      </div>
    </div>
  );
};

export default CountDown;
