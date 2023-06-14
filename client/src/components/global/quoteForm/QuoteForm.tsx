import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function QuoteForm() {
  return (
    <Flex as="form" border="2px solid" borderColor="gray.300" padding="1rem">
      <Heading>Get a quote</Heading>
    </Flex>
  );
}

export default QuoteForm;
