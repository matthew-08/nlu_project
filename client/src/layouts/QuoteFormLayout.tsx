import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import DefaultLayout from './DefaultLayout';
import QuoteForm from '../components/global/quoteForm/QuoteForm';

function QuoteFormLayout({ children }: { children: ReactNode }) {
  return (
    <DefaultLayout>
      {children}
      <Flex ml="auto">
        <QuoteForm />
      </Flex>
    </DefaultLayout>
  );
}

export default QuoteFormLayout;
