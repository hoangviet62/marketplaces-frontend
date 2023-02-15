import * as z from 'zod'
import errors from '@/constants/errors'

const schema = z.object({
  username: z.string().min(1, { message: errors.required }),
  password: z.string().min(1, { message: errors.required }),
})

export default schema
