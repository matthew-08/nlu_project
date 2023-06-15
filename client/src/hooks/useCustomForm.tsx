import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { generateFormInputs } from '../utils/generateFormInputs';
import { InputInfo } from '../types';

type Input<FormData> = {
  placeholder: string;
  fieldName: keyof FormData;
  inputInfo: InputInfo;
}[];

const useCustomForm = <FormData extends Record<any, any>>(
  inputInfo: Input<FormData>,
  zodSchema: ZodSchema
) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
  });

  const fieldHasError = (k: keyof FormData) => k in errors;
  const inputObjects = generateFormInputs<FormData>({
    inputInfo,
    errors,
    isInvalid: fieldHasError,
    register,
  });

  return { inputObjects, handleSubmit, setError };
};

export default useCustomForm;
