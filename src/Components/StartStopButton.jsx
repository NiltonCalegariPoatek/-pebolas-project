const StartStopButton = ({ setGameStart, gameStart }) => {
    return (
      <div>
        <button className={ gameStart ? "stop-button":"start-button"} onClick={() => setGameStart(!gameStart)}>{gameStart ? "Finish" : "Start"}</button>
      </div>
    )
  }
  
export default StartStopButton;  