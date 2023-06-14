import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import AppLogo from '../../appLogo/AppLogo';
import Navbar from './Navbar';

function Header() {
  return (
    <Flex as="header" minW="100%" minH="150px" flexDir="column">
      <AppLogo size="4rem" />
      <Navbar />
    </Flex>
  );
}

export default Header;
