import React from 'react'
import './custom.css'
import image from './nt.jpeg';

const Card = () => {
    return (
    <div className='card'>
      <img src={image} className='App-image' alt="img" style={{width : "100%", }} />
      <div className='container'><h4><b>Todd Nelson</b></h4>
        <p>Software Engineer</p>
      </div>

    </div>
    )
}

export default Card
