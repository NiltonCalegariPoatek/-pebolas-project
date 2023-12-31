import { useState } from "react";

const AdditionalNameInput = ({ teamColor, teamName, handleTeamNameChange, isDarkTheme }) => {
    const [addedName, setAddedName] = useState(false)
    return (
        <>
            {addedName ?
                <form className={'names' + (isDarkTheme ? " Dark" : "")}>
                    <input className={'names-input' + (isDarkTheme ? " Dark" : "")} type={"text"} placeholder="Team Name: ✎"
                        value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} 
                        maxLength='10'/>
                </form>
                :
                <button className="addname" onClick={() =>setAddedName(true)}>+Add name</button>
            }
            {console.log("oi: ", addedName)}
        </>
    )
}

export default AdditionalNameInput;