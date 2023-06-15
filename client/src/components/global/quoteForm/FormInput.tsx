/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { HTMLInputTypeAttribute } from 'react';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

type FieldInfo<FormData extends FieldValues> = {
  pHolderTxt: string;
  fieldName: Path<FormData>;
  inputType?: HTMLInputTypeAttribute | undefined;
  isInvalid: (k: keyof FormData) => boolean;
  errorMsg?: string;
  register: UseFormRegister<FormData>;
  isSelect?: boolean;
  selectOptions?: string[];
};

type Props<FormData extends FieldValues> = {
  fieldInfo: FieldInfo<FormData>;
};

export function FormInput<FormData extends FieldValues>({
  fieldInfo,
}: Props<FormData>) {
  const { fieldName, isInvalid, pHolderTxt, register, errorMsg, inputType } =
    fieldInfo;

  return (
    <FormControl isInvalid={isInvalid(fieldName)}>
      <InputGroup>
        <Input
          placeholder={pHolderTxt}
          type={inputType || 'text'}
          size="lg"
          minW="100%"
          {...register(fieldName)}
        />
      </InputGroup>
      <FormErrorMessage>{errorMsg as string}</FormErrorMessage>
    </FormControl>
  );
}
