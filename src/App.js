import './Dark-app.css';
import logo from './images/logo.png'
import React, { useState, useEffect } from 'react';
import Score from './Components/Score';
import Names from './Components/Names';
import Clock from './Components/Clock';
import PopUp from './Components/PopUp';
import StartStopButton from './Components/StartStopButton';
import FinishPopUp from './Components/FinishPopUp';

function App() {

  const [pointsGreen, setPointsGreen] = useState(0)
  const [pointsYellow, setPointsYellow] = useState(0)

  const [teamNameGreen, setTeamNameGreen] = useState()
  const [teamNameYellow, setTeamNameYellow] = useState()

  const [buttonPopup, setButtonPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [gameStart, setGameStart] = useState(false)

  const [running, setRunning] = useState(false);

  const [winner, setWinner] = useState()


  useEffect(() => { handleGameStart(gameStart) }, [gameStart])
  

  useEffect(() => {
    if (winner === undefined) {
      handleWinGame(pointsGreen, pointsYellow)
    }
  }, [pointsGreen, pointsYellow])

  function handleAddGoal(teamColor) {
    switch (teamColor.toLowerCase()) {
      case "green":
        setPointsGreen(pointsGreen + 1)
        break;

      case "yellow":
        setPointsYellow(pointsYellow + 1)
        break;

      default:
        break;
    }
  }

  function handleRemoveGoal(teamColor) {
    //Verification < 0
    switch (teamColor.toLowerCase()) {
      case "green":
        if (pointsGreen <= 0) {
          return
        }

        setPointsGreen(pointsGreen - 1)
        break;

      case "yellow":
        if (pointsYellow <= 0) {
          return
        }
        setPointsYellow(pointsYellow - 1)
        break;

      default:
        break;
    }
  }

  function handleTeamNameChange(teamColor, newTeamName) {
    switch (teamColor.toLowerCase()) {
      case "green":
        setTeamNameGreen(newTeamName)
        break;
      case "yellow":
        setTeamNameYellow(newTeamName)
        break;

      default:
        break;
    }
  }

  function handleGameStart({ gameStart }) {
    if (gameStart) {
      setRunning(true)
    }
    else {
      setRunning(false)
    }
  }

  function handleFinishGame(pointsGreen, pointsYellow) {
    if (pointsGreen > pointsYellow) {
      setWinner("green")
      setIsVisible(true)
    }
    else if (pointsYellow > pointsGreen) {
      setWinner("yellow")
      setIsVisible(true)
    }
  }

  function handleWinGame(pointsGreen, pointsYellow) {
    if (pointsGreen >= pointsYellow + 2 && pointsGreen >= 10) {
      setWinner("green")
      console.log("Verde ganhou")
    }
    else if (pointsYellow >= pointsGreen + 2 && pointsYellow >= 10) {
      setWinner("yellow")
      console.log("Amarelo ganhou")
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>

        <fieldset className='logo'>
          <img src={logo} alt='logo'></img>
          <button className='rules' onClick={() => setButtonPopup(true)}>Rules</button>
        </fieldset>

      </header>
      <Clock running={running} winner={winner} />


      <div className='scores-super-container'>
        <div className='scores-container'>
          <Names teamName={teamNameGreen} teamColor={"green"} handleTeamNameChange={handleTeamNameChange} gameStart={gameStart} />
          <Score
            points={pointsGreen}
            addPoint={() => handleAddGoal("green")}
            removePoint={() => handleRemoveGoal("green")}
            winner={winner}
            gameStart={gameStart}
          />
        </div>
        
        <div className='scores-container'>
          <Names teamName={teamNameYellow} teamColor={"yellow"} handleTeamNameChange={handleTeamNameChange} gameStart={gameStart} />
          <Score
            points={pointsYellow}
            addPoint={() => handleAddGoal("yellow")}
            removePoint={() => handleRemoveGoal("yellow")}
            winner={winner}
            gameStart={gameStart}
          />
        </div>
      </div>

      <StartStopButton setGameStart={setGameStart} gameStart={gameStart} />
      <FinishPopUp isVisible={isVisible}/>

      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>

    </div>
  );
}

export default App;
