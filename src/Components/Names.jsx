const Names = ({ teamColor, teamName, handleTeamNameChange, gameStart }) => {
    return ((gameStart === true) ? (

        <p className='team-names'>{teamName ? teamName : teamColor}</p>

    ) :
        <form className='names'>
            <input className='names-input' type={"text"} placeholder="Team Name: 🖉" value={teamName} onChange={(e) => handleTeamNameChange(teamColor, e.target.value)} />
        </form>
    )
}

export default Names;