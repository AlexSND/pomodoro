import React from 'react'

const Timer = (props) => {
    const mins = parseInt(props.timerLength / 60, 0)
    const sec = (props.timerLength % 60) < 10
                ? '0' + props.timerLength % 60
                : props.timerLength % 60
    return (
        <div className="pomodoro__timer">
            <p className={props.status === 'break time' ? "pomodoro__displayed-time pomodoro__displayed-time_break" : "pomodoro__displayed-time"}>
                {mins}:{sec}
            </p>
        </div>
    )
}

export default Timer