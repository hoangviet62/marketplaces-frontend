import * as z from 'zod'
import errors from '@/constants/errors'

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const schema = z.object({
  name: z.string().min(1, { message: errors.required }),
  images: z
    .custom<File[]>()
    .refine((files) => {
      if (files?.length === 0 || !files) return true
      return files?.[0]?.size <= MAX_FILE_SIZE
    }, `Max file size is 5MB.`)
    .refine((files) => {
      if (files?.length === 0 || !files) return true
      return ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type)
    }, '.jpg, .jpeg, .png and .webp files are accepted.'),
  medias: z
    .custom<File[]>()
    .refine((files) => {
      if (files?.length === 0 || !files) return true
      return files?.[0]?.size <= MAX_FILE_SIZE
    }, `Max file size is 5MB.`)
    .refine((files) => {
      if (files?.length === 0 || !files) return true
      return ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type)
    }, '.jpg, .jpeg, .png and .webp files are accepted.'),
})

export default schema
