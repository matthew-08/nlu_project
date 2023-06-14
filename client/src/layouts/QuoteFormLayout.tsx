import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import DefaultLayout from './DefaultLayout';
import QuoteForm from '../components/global/quoteForm/QuoteForm';

function QuoteFormLayout({ children }: { children: ReactNode }) {
  return (
    <DefaultLayout>
      <Flex mt="2rem" flexDir="column" justify="center">
        {children}
        <Flex>
          <QuoteForm />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

export default QuoteFormLayout;
