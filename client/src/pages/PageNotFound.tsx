import { Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import ReturnHomeBtn from '../components/global/ReturnHomeBtn';
import DefaultLayout from '../layouts/DefaultLayout';

function PageNotFound() {
  return (
    <DefaultLayout>
      <Flex m="auto" mt="3rem" flexDir="column" align="center">
        <Heading mb="2rem">404 Page not found</Heading>
        <ReturnHomeBtn />
      </Flex>
    </DefaultLayout>
  );
}

export default PageNotFound;
