import React from 'react'

//styles
import {GlobalStyle} from '../assets/styles/Home'


//components 
import {Header} from '../components/Header/index'
import {Main} from '../components/Main/index'
import {About} from '../components/About/index'


const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
    </div>
  )
}

export default Home;