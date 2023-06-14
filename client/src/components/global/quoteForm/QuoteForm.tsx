import { Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import useCustomForm from '../../../hooks/useCustomForm';
import QuoteSchema from '../../../schemas/quoteSchema';
import { FormInput } from './FormInput';

function QuoteForm() {
  const { handleSubmit, inputObjects, setError } = useCustomForm(
    [
      {
        fieldName: 'name',
        placeholder: 'Name',
        inputType: 'text',
      },
      {
        fieldName: 'email',
        placeholder: 'Email',
        inputType: 'text',
      },
    ],
    QuoteSchema
  );
  return (
    <Flex as="form" border="2px solid" borderColor="gray.300" padding="1rem">
      <Heading>Get a quote</Heading>
      {inputObjects.map((i, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <FormInput fieldInfo={i} key={index} />;
      })}
    </Flex>
  );
}

export default QuoteForm;
