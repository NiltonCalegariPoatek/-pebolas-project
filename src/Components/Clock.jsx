import React, { useState, useEffect } from 'react';

const Clock = ({ running, winner }) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    return (
        <div className='clock-container'>
            <p className='winner'>{winner ? `${winner} is the winner` : ""}</p>
            <span className='clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span className='clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
    )
}

export default Clock;

