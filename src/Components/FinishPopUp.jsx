function FinishPopUp({isVisible}) {
    return isVisible && (
        <div className="popup">
            <div className="popup-content">
                <button className="modal-buttons">Change Teams</button>
                <button className="modal-buttons">Play Again</button>
            </div>
        </div>
    );
}

export default FinishPopUp;