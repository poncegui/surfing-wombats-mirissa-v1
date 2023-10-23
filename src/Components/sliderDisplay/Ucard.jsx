import React from "react"

const Ucard = ({ item: {  cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span>
        </div>
      </div>
    </>
  )
}

export default Ucard
