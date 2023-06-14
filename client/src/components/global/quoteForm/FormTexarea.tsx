import React from 'react';
import {
  FormControl,
  InputGroup,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { FieldInfo } from '../../../types';

type Props<T extends FieldValues> = {
  fieldInfo: FieldInfo<T>;
};

function FormTexarea<FormData extends FieldValues>({
  fieldInfo,
}: Props<FormData>) {
  const {
    fieldName,
    inputInfo,
    isInvalid,
    pHolderTxt,
    register,
    errorMsg,
    inputType,
  } = fieldInfo;
  return (
    <FormControl isInvalid={isInvalid(fieldName)}>
      <InputGroup>
        <Textarea
          placeholder={pHolderTxt}
          size="lg"
          minW="100%"
          {...register(fieldName)}
        />
      </InputGroup>
      <FormErrorMessage>{errorMsg as string}</FormErrorMessage>
    </FormControl>
  );
}

export default FormTexarea;
