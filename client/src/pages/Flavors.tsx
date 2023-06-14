import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import QuoteFormLayout from '../layouts/QuoteFormLayout';

function Flavors() {
  return (
    <QuoteFormLayout>
      <Heading fontSize="4rem">Flavors</Heading>
      <Flex />
    </QuoteFormLayout>
  );
}

export default Flavors;
