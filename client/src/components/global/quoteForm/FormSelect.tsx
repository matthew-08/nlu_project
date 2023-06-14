/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Select, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FieldInfo } from '../../../types';
import capitalize from '../../../utils/capitalize';

type Props<T extends FieldValues> = {
  fieldInfo: FieldInfo<T>;
};

function FormSelect<FormData extends FieldValues>({
  fieldInfo,
}: Props<FormData>) {
  const { fieldName, isInvalid, pHolderTxt, register, errorMsg, inputInfo } =
    fieldInfo;
  return (
    <FormControl isInvalid={isInvalid(fieldName)}>
      <Select {...register(fieldName)} size="lg">
        <option value="" disabled selected>
          {pHolderTxt}
        </option>
        {inputInfo.inputType === 'select' &&
          inputInfo.selectOptions.map((option) => {
            return (
              <option value={option} key={option}>
                {capitalize(option)}
              </option>
            );
          })}
      </Select>
      <FormErrorMessage>{errorMsg as string}</FormErrorMessage>
    </FormControl>
  );
}

export default FormSelect;
