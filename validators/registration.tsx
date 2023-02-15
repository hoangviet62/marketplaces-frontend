import * as z from 'zod'
import errors from '@/constants/errors'

const schema = z
  .object({
    username: z.string().min(1, { message: errors.required }),
    password: z.string().min(1, { message: errors.required }),
    confirmPassword: z.string().min(1, { message: errors.required }),
    email: z
      .string()
      .min(1, { message: errors.required })
      .email({ message: errors.wrongEmailFormat }),
    mobileNumber: z.string().min(1, { message: errors.required }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: errors.passwordsDontMatch,
    path: ['confirmPassword'], // path of error
  })

export default schema
