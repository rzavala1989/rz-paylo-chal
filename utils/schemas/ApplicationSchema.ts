import * as z from 'zod';

export const ApplicationSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name cannot be longer than 50 characters.' })
    .regex(/^[A-Za-z]+$/, { message: 'First name can only contain letters.' })
    .refine((value) => !!value, { message: 'First name is required.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name cannot be longer than 50 characters.' })
    .regex(/^[A-Za-z]+$/, { message: 'Last name can only contain letters.' })
    .refine((value) => !!value, { message: 'Last name is required.' }),
  email: z
    .string()
    .email({ message: 'Invalid email address.' })
    .max(255, {
      message: 'Email address cannot be longer than 255 characters.',
    })
    .refine((value) => !!value, { message: 'Email address is required.' }),
  phone: z
    .string()
    .regex(/^\+?\d{0,3}[- ]?\d{2,3}[- ]?\d{5,6}$/, {
      message: 'Invalid phone number.',
    })
    .refine((value) => !!value, { message: 'Phone number is required.' }),
  numDependents: z
    .number()
    .int({ message: 'Number of dependents must be an integer.' })
    .gte(0, { message: 'Number of dependents cannot be negative.' })
    .lte(10, { message: 'Number of dependents cannot be more than 10.' }),
  dependents: z
    .array(
      z.object({
        firstName: z
          .string()
          .min(2, { message: 'First name must be at least 2 characters.' })
          .max(50, {
            message: 'First name cannot be longer than 50 characters.',
          })
          .regex(/^[A-Za-z]+$/, {
            message: 'First name can only contain letters.',
          })
          .refine((value) => !!value, { message: 'First name is required.' }),
        lastName: z
          .string()
          .min(2, { message: 'Last name must be at least 2 characters.' })
          .max(50, {
            message: 'Last name cannot be longer than 50 characters.',
          })
          .regex(/^[A-Za-z]+$/, {
            message: 'Last name can only contain letters.',
          })
          .refine((value) => !!value, { message: 'Last name is required.' }),
      })
    )
    .optional(),
});
