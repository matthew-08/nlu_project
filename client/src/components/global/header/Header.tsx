import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import AppLogo from '../../appLogo/AppLogo';
import Navbar from './Navbar';

function Header() {
  return (
    <Flex as="header" minW="100%" minH="150px" flexDir="column">
      <Flex mx={['auto', 'auto', '0']}>
        <AppLogo
          headingSize={['4rem', '5rem', '6rem']}
          logoSize={['4.5rem', '5.5rem', '6.5rem']}
        />
      </Flex>
      <Navbar />
    </Flex>
  );
}

export default Header;
