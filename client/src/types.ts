import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

export type Category = {
  name: string;
  id: number;
};

export type FieldInfo<FormData extends FieldValues> = {
  pHolderTxt: string;
  fieldName: Path<FormData>;
  inputType?: HTMLInputTypeAttribute | undefined;
  isInvalid: (k: keyof FormData) => boolean;
  errorMsg?: string;
  register: UseFormRegister<FormData>;
  inputInfo: InputInfo;
};

export type CategoryList = Category[];

interface TextInput {
  inputType: 'text';
}
interface SelectInput {
  inputType: 'select';
  selectOptions: string[] | readonly string[];
}
interface TextArea {
  inputType: 'textarea';
}
interface Checkbox {
  inputType: 'checkbox';
}

export type InputInfo = TextInput | Checkbox | TextArea | SelectInput;

export type DropdownItem = {
  id?: number;
  href: string;
  name: string;
};
