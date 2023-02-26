/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductInterface {
  id?: number
  name?: string
  images?: string[]
}

export interface ProductProps {
  // should be ProductInterface[]
  data: any[]
}

export interface ProductPayload {
  name: string
  description: string
  tag: string
  category_id: number
  images?: File[]
  medias?: File[]
}
