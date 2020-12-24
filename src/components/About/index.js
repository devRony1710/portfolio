import React from 'react'

//styles
import {AboutContainer, AboutContainerImg, AboutImg, AboutContainerDescription, Title, Description} from './style.js'

import Me from '../../assets/static/me1.png'

export const About = () => (
  <AboutContainer>
    <AboutContainerImg>
      <AboutImg src={Me} />
    </AboutContainerImg>
    <AboutContainerDescription>
      <Title>Rony Antolinez</Title>
      <Description>
        Fully self-taught frontend developer, dedicated to increasing my skills
        as a programmer, always maintaining good practices in software
        development and in my personal life 
        <br />
        <br />
        Always aware of growing as a person, working hard every day to achieve
        my goals, improving my soft skills and acquiring different types of
        knowledge so as not to lock myself in a comfort zone
      </Description>
    </AboutContainerDescription>
  </AboutContainer>
);