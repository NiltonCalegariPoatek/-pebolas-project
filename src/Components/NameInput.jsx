const NameInput = ({ teamColor, teamName, handleTeamNameChange }) => {
    return (
        <form className='names'>
            <input className='names-input' type={"text"} placeholder="Team Name: 🖉"
                value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} 
                maxLength='17'/>
        </form>
    )
}
export default NameInput;