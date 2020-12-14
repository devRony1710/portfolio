import React from 'react'

//styles
import '../assets/styles/Main.css'

//img 
import mainImage from '../assets/static/main2.png'

const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-container-description'>
        <h1>
          " Hasta que no hagas consciente a tu subconsciente, 
          lo seguiras llamando destino " -HzK
        </h1>
      </div>
      <div className='main-container-img'>
        <img src={mainImage} alt='main-img' />
      </div>
    </div>
  );
}

export default Main