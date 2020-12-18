import React from 'react'

//styles
import {GlobalStyle} from '../assets/styles/Home'


//components 
import {Header} from '../components/Header/index'
import {Main} from '../components/Main'


const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  )
}

export default Home;