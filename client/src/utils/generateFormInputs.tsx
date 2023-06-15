import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { InputInfo } from '../types';

type Props<FormData extends FieldValues> = {
  inputInfo: {
    placeholder: string;
    fieldName: keyof FormData;
    inputInfo: InputInfo;
  }[];
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  isInvalid: (f: keyof FormData) => boolean;
};

const generateFormInputs = <FormData extends FieldValues>(
  data: Props<FormData>
) => {
  const { register, errors, isInvalid } = data;
  return data.inputInfo.map((i) => {
    return {
      fieldName: i.fieldName,
      inputInfo: i.inputInfo,
      register,
      isInvalid,
      pHolderTxt: i.placeholder,
      errorMsg: errors[i.fieldName]?.message,
    };
  });
};

export type FieldProps = ReturnType<typeof generateFormInputs>[number];

export { generateFormInputs };
