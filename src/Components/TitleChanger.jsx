const TitleChanger = (props) => {
    const mins = parseInt(props.timerLength / 60, 0)
    const sec = (props.timerLength % 60) < 10
                ? '0' + props.timerLength % 60
                : props.timerLength % 60
    document.title = mins + ':' + sec
    return null
}

export default TitleChanger