const StartStopButton = ({ setGameStart, gameStart, handleGameStart, handleFinishGame, pointsGreen, pointsYellow}) => {
  return (
    <div>
      <button className={gameStart ? "stop-button" : "start-button"}
        onClick={() => { gameStart ? handleFinishGame(pointsGreen, pointsYellow, gameStart)  : handleGameStart(gameStart)}}>
        {gameStart ? "Finish" : "Start"}
      </button>
    </div>
  )
}

export default StartStopButton;  