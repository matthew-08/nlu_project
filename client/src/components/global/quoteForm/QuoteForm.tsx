/* eslint-disable react/no-array-index-key */
import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import useCustomForm from '../../../hooks/useCustomForm';
import useSubmitQuote from '../../../hooks/useSubmitQuote';
import QuoteSchema, { QuoteFormData } from '../../../schemas/quoteSchema';
import APP_CAPABILITIES from '../../../utils/capabilites';
import { FormInput } from './FormInput';
import FormSelect from './FormSelect';
import FormTexarea from './FormTexarea';

function QuoteForm() {
  const { handleSubmitQuote, submitStatus } = useSubmitQuote();
  const { handleSubmit, inputObjects } = useCustomForm<QuoteFormData>(
    [
      {
        fieldName: 'name',
        placeholder: 'Name',
        inputInfo: {
          inputType: 'text',
        },
      },
      {
        fieldName: 'email',
        placeholder: 'Email',
        inputInfo: {
          inputType: 'text',
        },
      },
      {
        fieldName: 'capability',
        placeholder: 'Select a capability',
        inputInfo: {
          inputType: 'select',
          selectOptions: APP_CAPABILITIES,
        },
      },
      {
        fieldName: 'comments',
        placeholder: 'Comments',
        inputInfo: {
          inputType: 'textarea',
        },
      },
      {
        fieldName: 'newsletter',
        placeholder: "I'd like to receive a newsletter",
        inputInfo: {
          inputType: 'checkbox',
        },
      },
    ],
    QuoteSchema
  );
  const temp = (data: QuoteFormData) => handleSubmitQuote(data);
  return (
    <Flex
      as="form"
      border="2px solid"
      borderColor="gray.300"
      padding="1rem"
      flexDir="column"
      onSubmit={handleSubmit(temp)}
      minW="350px"
    >
      <Heading m="auto" mb="1rem">
        Get a quote
      </Heading>
      <Flex gap="1rem" flexDir="column">
        {inputObjects.map((i, index) => {
          const { inputType } = i.inputInfo;
          if (inputType === 'select') {
            return <FormSelect fieldInfo={i} key={i.fieldName} />;
          }
          if (inputType === 'textarea') {
            return <FormTexarea fieldInfo={i} key={i.fieldName} />;
          }
          if (inputType === 'checkbox') {
            return (
              <Checkbox key={i.fieldName} {...i.register(i.fieldName)}>
                {i.pHolderTxt}
              </Checkbox>
            );
          }
          return <FormInput fieldInfo={i} key={index} />;
        })}
      </Flex>
      <Button
        type="submit"
        mt="1rem"
        size="lg"
        isLoading={submitStatus.loading}
        colorScheme="blue"
      >
        Submit
      </Button>
    </Flex>
  );
}

export default QuoteForm;
