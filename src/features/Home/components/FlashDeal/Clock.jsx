import React, { useEffect, useState } from 'react'

function Clock() {

    /* let time = new Date()

    const [clock, setClock] = useState(time)

    let date = clock.getDate()

    let hours = clock.getHours()

    let minutes = clock.getMinutes()

    let seconds = clock.getSeconds()

    const updateTime = () => {
        time = new Date()
        setClock(time)
    }
    setInterval(updateTime, 1000) */

    return (
        <div className="flash-deal__left__time">
            <i className="fas fa-clock"></i>
            <span className="flash-deal__left__time-item">
                <span>1</span>
                <span>DAYS</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>1</span>
                <span>HOURS</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>1</span>
                <span>MINUTES</span>
            </span>
            <span className="flash-deal__left__time-item">
                <span>1</span>
                <span>SECONDS</span>
            </span>
        </div>
    )
}

export default Clock
