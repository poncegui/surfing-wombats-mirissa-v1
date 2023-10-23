import React from "react"

const Ucard = ({ item: {  cover, title, subtitle } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{title}</h3>
          {/* <span>{subtitle}</span> */}
        </div>
      </div>
    </>
  )
}

export default Ucard
