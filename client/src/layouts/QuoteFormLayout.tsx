import { Flex, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import DefaultLayout from './DefaultLayout';
import QuoteForm from '../components/global/quoteForm/QuoteForm';

function QuoteFormLayout({ children }: { children: ReactNode }) {
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  return (
    <DefaultLayout>
      <Flex
        mt="2rem"
        flexDir={isSmallerThan900 ? 'column' : 'row'}
        justify="center"
      >
        {children}
        <Flex m={isSmallerThan900 ? 'auto' : '0'}>
          <QuoteForm />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

export default QuoteFormLayout;
