import { z } from 'zod';

const requiredMsg = 'Field is required';
const QuoteSchema = z.object({
  name: z
    .string({ required_error: requiredMsg })
    .min(3, { message: 'Field must contain atleast 3 characters' }),
  email: z.string().email(),
  capability: z.string().nonempty({ message: 'Must select a capability' }),
  comments: z.string(),
  newsletter: z.boolean(),
});

export type QuoteFormData = z.infer<typeof QuoteSchema>;

export default QuoteSchema;
