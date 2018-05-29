import React from 'react'

const Control = (props) => {
    return (
        <div className="pomodoro__controll">
            <span className="pomodoro__controll-title">
                {props.controlTitle}
            </span>
            <p className="pomodoro__controll-time">
                {props.displayedTime / 60}
            </p>
            <button className="pomodoro__button" onClick={(e) => props.changeTime(-60, e)}>-</button>
            <button className="pomodoro__button" onClick={(e) => props.changeTime(60, e)}>+</button>
        </div>
    )
}

export default Control