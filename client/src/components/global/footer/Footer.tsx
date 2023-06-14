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
      px={['0.5rem', '2rem']}
      align="center"
      py={['0.5rem', '1rem']}
    >
      <CopyrightLogo />
      <Flex ml="auto">
        <AppLogo headingSize={['2rem', '2.5rem']} logoSize={['2rem', '3rem']} />
      </Flex>
    </Flex>
  );
}

export default Footer;
