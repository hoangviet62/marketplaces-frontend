import * as z from 'zod'
import errors from '@/constants/errors'

const schema = z
  .object({
    username: z.string().min(1, { message: errors.required }),
    password: z.string().min(1, { message: errors.required }),
    passwordConfirm: z.string().min(1, { message: errors.required }),
    email: z
      .string()
      .min(1, { message: errors.required })
      .email({ message: errors.wrongEmailFormat }),
    mobile: z.string().min(1, { message: errors.required }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: errors.passwordsDontMatch,
    path: ['passwordConfirm'], // path of error
  })

export default schema
