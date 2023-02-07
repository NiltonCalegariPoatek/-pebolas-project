const Score = ({ points, addPoint, removePoint, winner, gameStart }) => {
  return (
    <>
      <div className='score' >
        <p className='number'> {points} </p>
        <div className='button-container'>
          <button className='button' onClick={removePoint} disabled = {gameStart && winner===undefined ? false : true}>-</button>
          <button className='button' onClick={addPoint} disabled = {gameStart && winner===undefined ? false : true}>+</button>
        </div>
      </div>
    </>
  )
}

export default Score;