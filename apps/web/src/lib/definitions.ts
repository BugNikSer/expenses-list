import { z } from "zod";

export const SignUpFormSchema = z.object({
  login: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export const SignInFormSchema = z.object({
  login: z
    .string()
    // .email({ message: 'Please enter valid email' })
    .trim(),
  password: z
    .string()
    // .min(8, { message: 'Min 8 characters long' })
    // .regex(/[a-zA-z]/, { message: 'At least one letter' })
    // .regex(/[0-9]/, { message: 'At least one number' })
    .trim()
});

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
