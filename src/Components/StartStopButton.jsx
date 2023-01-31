const StartStopButton = ({ setGameStart, gameStart, handleFinishGame }) => {
  return (
    <button className={gameStart ? "stop-button" : "start-button"} onClick={() => gameStart ?  handleFinishGame() : setGameStart(!gameStart)}>{gameStart ? "Finish" : "Start"}</button>
  )
}

export default StartStopButton;  