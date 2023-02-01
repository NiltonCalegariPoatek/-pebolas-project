import { useState } from "react";

const AdditionalNameInput = ({ teamColor, teamName, handleTeamNameChange }) => {
    const [addedName, setAddedName] = useState(false)
    return (
        <>
            {addedName ?
                <form className='names'>
                    <input className='names-input' type={"text"} placeholder="Team Name: 🖉"
                        value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} />
                </form>
                :
                <button className="addname" onClick={() =>setAddedName(true)}>+Add name</button>
            }
            {console.log("oi: ", addedName)}
        </>
    )
}

export default AdditionalNameInput;