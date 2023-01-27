import './App.css';
import logo from './images/logo.png'
import React, { useState, useEffect } from 'react';
import Score from './Components/Score.';

//Pebolas project
const Names = ({ teamColor, teamName, handleTeamNameChange, gameStart }) => {
  return ((gameStart === true) ? (
    <>
      <p className='team-names'>{teamName ? teamName : teamColor}</p>
    </>
  ) :
    <form className='names'>
      <input className='names-input' type={"text"} Placeholder="Team Name: 🖉" value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} />
    </form>
  )
}


const Clock = ({ running, winner }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className='clock-container'>
      <p>{winner ? `${winner} is the winner` : ""}</p>
      <span className='clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span className='clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-content'>
        <button className='close-button' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

const StartButton = ({ setGameStart }) => {
  return (
    <div>
      <button className="start-button" onClick={() => setGameStart(true)}>Start</button>
    </div>
  )
}

const StopButton = ({ setGameStart }) => {
  return (
    <div>
      <button className="stop-button" onClick={() => setGameStart(false)}>Finish</button>
    </div>
  )
}

function App() {

  const [pointsGreen, setPointsGreen] = useState(0)
  const [pointsYellow, setPointsYellow] = useState(0)

  const [teamNameGreen, setTeamNameGreen] = useState()
  const [teamNameYellow, setTeamNameYellow] = useState()

  const [buttonPopup, setButtonPopup] = useState(false);

  const [gameStart, setGameStart] = useState(false)

  const [running, setRunning] = useState(false);

  const [winner, setWinner] = useState()


  useEffect(() => { handleGameStart({ gameStart }) }, [gameStart])

  useEffect(() => {
    if (winner === undefined) {
      handleWinGame(pointsGreen, pointsYellow)
    }
  })

  function handleAddGoal(teamColor) {
    //Verification > 10
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

  function StartFinishButton({ gameStart }) {
    return (gameStart === true) ? (
      <>
        <StopButton setGameStart={setGameStart} />
      </>
    ) : <StartButton setGameStart={setGameStart} />;
  }

  function handleGameStart({ gameStart }) {
    if (gameStart) {
      setRunning(true)
    }
    else {
      setRunning(false)
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
          />
        </div>
        
        <div>
          <Names teamName={teamNameYellow} teamColor={"yellow"} handleTeamNameChange={handleTeamNameChange} gameStart={gameStart} />
          <Score
            points={pointsYellow}
            addPoint={() => handleAddGoal("yellow")}
            removePoint={() => handleRemoveGoal("yellow")}
            winner={winner}
          />
        </div>
      </div>

      <StartFinishButton gameStart={gameStart} />

      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className='rules-title'>Rules</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
      </PopUp>
    </div>
  );
}

export default App;
