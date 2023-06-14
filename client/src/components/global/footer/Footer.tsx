import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { MdCopyright } from 'react-icons/md';
import AppLogo from '../../appLogo/AppLogo';
import CopyrightLogo from '../copyrightLogo/CopyrightLogo';

function Footer() {
  return (
    <Flex
      width="100%"
      minH="50px"
      background="white"
      backgroundColor="gray.100"
      mt="auto"
      px="2rem"
      align="center"
    >
      <CopyrightLogo />

      <Flex ml="auto">
        <AppLogo size="1.5rem" />
      </Flex>
    </Flex>
  );
}

export default Footer;
