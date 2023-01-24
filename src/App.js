import './App.css';
import logo from './images/logo.png'
import React, { useState, useEffect } from 'react';

//Pebolas project
const Names = ({ teamColor, teamName, handleTeamNameChange }) => {
  return (
    <form className='names'>
      <input className='names-input' type={"text"} Placeholder="Team Name: 🖉" value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} />
    </form>
  )
}

const Score = ({ teamName, teamColor, points, addPoint, removePoint, handleTeamNameChange }) => {
  return (
    <div className='score'>
      <Names teamName={teamName} teamColor={teamColor} handleTeamNameChange={handleTeamNameChange}/>
      <p className='number'> {points} </p>
      <div className='button-container'>
      <button className='button' onClick={removePoint}>-</button>
      <button className='button' onClick={addPoint}>+</button>

      </div>
    </div>
  )
}

const Clock = () => {

  const [time, setTime] = useState(0);
  const [running] = useState(true);

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
      <span className='clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span className='clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className= 'popup-content'>
        <button className='close-button' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

function App() {

  const [pointsGreen, setPointsGreen] = useState(0)
  const [pointsYellow, setPointsYellow] = useState(0)

  const [teamNameGreen, setTeamNameGreen] = useState()
  const [teamNameYellow, setTeamNameYellow] = useState()

  const [buttonPopup, setButtonPopup] = useState(false);

  function handleAddGoal(teamColor) {
    //Verification > 10
    switch (teamColor.toLowerCase()) {
      case "green":
        if (pointsGreen >= 10) {
          alert('Score is already 10!')
          return
        }

        setPointsGreen(pointsGreen + 1)
        break;

      case "yellow":
        if (pointsYellow >= 10) {
          alert('Score is already 10!')
          return
        }
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
          alert('Score is already 0!')
          return
        }

        setPointsGreen(pointsGreen - 1)
        break;

      case "yellow":
        if (pointsYellow <= 0) {
          alert('Score is already 0!')
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

  return (
    <div className='App'>
      <header className='App-header'>

        <fieldset className='logo'>
          <img src={logo} alt='logo'></img>
          <button className='rules' onClick={() => setButtonPopup(true)}>Rules</button>
        </fieldset>

      </header>
      <Clock />
      <div className='scores-container'>
        <Score
          points={pointsGreen}
          addPoint={() => handleAddGoal("green")}
          removePoint={() => handleRemoveGoal("green")}
          teamName={teamNameGreen}
          handleTeamNameChange={handleTeamNameChange}
          teamColor = {"green"}
        />

        <Score
          points={pointsYellow}
          addPoint={() => handleAddGoal("yellow")}
          removePoint={() => handleRemoveGoal("yellow")}
          teamName={teamNameYellow}
          handleTeamNameChange={handleTeamNameChange}
          teamColor = {"yellow"}
        />
      </div>
      <p>Team name green: {teamNameGreen} Team name yellow: {teamNameYellow}</p>

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
