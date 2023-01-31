const StartStopButton = ({ setGameStart, gameStart, handleFinishGame }) => {
  return (
    <button className={gameStart ? "stop-button" : "start-button"} onClick={() => gameStart ?  handleFinishGame() : setGameStart(true)}>{gameStart ? "Finish" : "Start"}</button>
  )
}

export default StartStopButton;  