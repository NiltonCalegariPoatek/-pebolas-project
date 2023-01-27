const Score = ({ points, addPoint, removePoint, winner }) => {
  return (
    <>
      <div className='score' >
        <p className='number'> {points} </p>
        <div className='button-container'>
          <button className='button' onClick={removePoint}>-</button>
          <button className='button' onClick={addPoint}>+</button>
        </div>
      </div>
    </>
  )
}

export default Score;