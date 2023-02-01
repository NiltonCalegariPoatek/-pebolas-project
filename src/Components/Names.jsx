import AdditionalNameInput from "./AdditionalNameInput";
import NameInput from "./NameInput";

const Names = ({ teamColor, teamName, additionalTeamName, handleTeamNameChange, handleAdditionalNameChange, gameStart }) => {

    function buildTeamNames(teamName, teamColor, additionalTeamName) {
        if (teamName && additionalTeamName) {
            return `${teamName} & ${additionalTeamName}`
        }
        else if (teamName) {
            return teamName
        }
        else if (additionalTeamName) {
            return additionalTeamName
        }
        else {
            return teamColor
        }
    }

    return (
        gameStart ?
            <p className='team-names'>{buildTeamNames(teamName, teamColor, additionalTeamName)}</p>
            :
            <>
                <NameInput teamColor={teamColor} teamName={teamName} handleTeamNameChange={handleTeamNameChange} />

                <AdditionalNameInput teamColor={teamColor} teamName={additionalTeamName} handleTeamNameChange={handleAdditionalNameChange} />
            </>
    )
}

export default Names;