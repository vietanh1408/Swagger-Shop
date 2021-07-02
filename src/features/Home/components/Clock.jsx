import React, { useEffect, useState } from 'react'

function Clock() {

    const [timeString, setTimeString] = useState(null)

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setTimeString(new Date())
        }, 1000)
        return () => {
            clearInterval(clockInterval)
        }
    }, [])

    const date = timeString !== null ? timeString?.getDate() : 0
    const hours = timeString !== null ? timeString?.getHours() : 0
    const minutes = timeString !== null ? timeString?.getMinutes() : 0
    const seconds = timeString !== null ? timeString?.getSeconds() : 0

    return (
        <div className="flash-deal__left__time" >
            <i className="fas fa-clock"></i>
            <span className="flash-deal__left__time-item">
                <span>{1384 + date}</span>
                <span>DAYS</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>{`0${hours}`.slice(-2)}</span>
                <span>HOURS</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>{`0${minutes}`.slice(-2)}</span>
                <span>MINUTES</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>{`0${seconds}`.slice(-2)}</span>
                <span>SECONDS</span>
            </span>
        </div>
    )
}

export default Clock
