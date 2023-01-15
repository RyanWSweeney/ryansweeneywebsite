import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "../DateTimeDisplay";


function Marathon() {
    const [days, hours, minutes, seconds] = useCountdown("2023-12-12 00:00:00");

    return (
        <div className="marathon">
        <h1>Marathon</h1>
        <div className="countdown-timer">
            <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
        </div>
        </div>
    );

}

export default Marathon;