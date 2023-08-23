const ToggleDarkMode = ({isDarkTheme, setIsDarkTheme}) => {
    return (
        <>
            <label className="switch">
                <input type="checkbox" value={isDarkTheme} onChange={(e) => setIsDarkTheme(!isDarkTheme)}/>
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default ToggleDarkMode;