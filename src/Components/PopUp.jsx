function PopUp(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-content'>
                <button className='close-button' onClick={() => props.setTrigger(false)}>x</button>
                <h3 className='rules-title'>Rules</h3>
                <ul className='rules-list'>
                    <li>The team that scores 10 points with a difference of 2 points wins. In the case of a 9-9 score, the game ends when one of the teams opens up a 2-point lead.</li>
                    <p/>
                    <li>The match starts with the ball being launched by one of the sides of the table in the middle of the field. Throughout the game, the team that suffered the goal starts relaunching the ball.</li>
                    <p/>
                    <li>The goal is scored when the ball enters the compartment on one side of the field.</li>
                    <p/>
                    <li>Goalkeeper's goal - without deflecting on another dummy from the same team on the course - is worth 2 points.</li>
                    <p/>
                    <li>Traditionally, in the case of a 10-0 score, the losing team is invited to pass under the pebolas table and the event is recorded.</li>
                    <p/>
                    <li>Other agreements such as allowing or disallowing the spinning/"roletão" (spinning the rod over 360-degree in a single shot) or what to do when the ball stops in the field can be agreed upon between the parties.</li>
                </ul>
            </div>
        </div>
    ) : "";
}

export default PopUp;
