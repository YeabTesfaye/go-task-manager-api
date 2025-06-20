import { PRIORITY_VALUES, STATUS_VALUES } from '@/types';
import z from 'zod';

// Common validators
const nameRegex = /^[a-zA-Z\s]+$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;<>,.?/~`-]+$/;

// Schema for signing in a user
export const signInFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().trim().min(1, { message: 'Password is required' }),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, 'Name must be at least 3 characters')
      .regex(nameRegex, {
        message: 'Name must contain only letters and spaces',
      }),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Please provide a valid email address'),
    password: z
      .string()
      .trim()
      .min(8, 'Password must be at least 8 characters')
      .max(72, "Password can't be longer than 64 characters")
      .regex(passwordRegex, {
        message: 'Password contains invalid characters',
      }),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const profileUpdateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const passwordUpdateSchema = z.object({
  currentPassword: z.string().min(6, 'Password must be at least 6 characters'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
});

export const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().optional(),
  priority: z.enum(PRIORITY_VALUES),
  status: z.enum(STATUS_VALUES),
  dueDate: z.date().nullable(),
  tags: z.array(z.string()).default([]),
  collaborators: z.array(z.string()).default([]),
});

export const commentSchema = z.object({
  content: z
    .string()
    .trim()
    .min(10, { message: 'Comment must be at least 10 characters' })
    .max(1000, { message: 'Comment must be at most 1000 characters' }),
});
