import React from 'react';

import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

import Phone from '../../assets/static/phone.png';

import {
  ContactContainer,
  ContactImgContainer,
  ContactInfo,
  ContactTitle,
} from './style';

export const Contact = () => {
  return (
    <>
      <ContactTitle>Contacto</ContactTitle>
      <ContactContainer>
        <ContactImgContainer>
          <img alt="Contact img" src={Phone} />
        </ContactImgContainer>
        <ContactInfo>
          <a href="https://www.facebook.com/DevRony-102544118137046">
            <FaFacebook /> DevRony
          </a>
          <a href="https://twitter.com/devRony2">
            {' '}
            <FaTwitter /> devRony2{' '}
          </a>
          <a href="https://www.linkedin.com/in/ronyabetancourt/">
            <FaLinkedin /> Rony Antolinez
          </a>
          <p>
            {' '}
            <FaMailBulk /> rony1710.dev@gmail.com
          </p>
          <p>
            {' '}
            <MdCall /> (+57) 3503414966
          </p>
        </ContactInfo>
      </ContactContainer>
    </>
  );
};
