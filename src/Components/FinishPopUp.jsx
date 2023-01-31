function FinishPopUp({isVisible, handlePlayAgain, handleChangeTeams}) {
    return isVisible && (
        <div className="popup">
            <div className="modal-popup-content">
                <button className="modal-buttons" onClick={handleChangeTeams}>Change Teams</button>
                <button className="modal-buttons" onClick={handlePlayAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default FinishPopUp;