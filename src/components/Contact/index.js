import React from 'react';

import { MdCall } from 'react-icons/md';

import { ContactContainer } from './style';

export const Contact = () => {
  return (
    <ContactContainer>
      <p>
        {' '}
        <MdCall size="50px" /> 3503414966
      </p>
    </ContactContainer>
  );
};
