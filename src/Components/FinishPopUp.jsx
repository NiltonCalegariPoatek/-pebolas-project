function FinishPopUp(props) {
    return (props.trigger) ? (
        <div>
            <div>
                <button>Change Teams</button>
                <button>Play Again</button>
            </div>
        </div>
    ) : "";
}

export default FinishPopUp;