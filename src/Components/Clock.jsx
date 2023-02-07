import React, { useState, useEffect } from 'react';

const Clock = ({ running, winner, isResetClock, isResetFunc }) => {


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

    useEffect(()=> {
        if (isResetClock){
            setTime(0)
            isResetFunc()
        }
    }, [isResetClock] )

    return (
        <div className='clock-container'>
            
            <span className='clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span className='clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
    )
}

export default Clock;

