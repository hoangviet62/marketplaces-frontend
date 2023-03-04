import { MetaData } from "@/components/Table/types";
import { Image } from './image'

export interface ProductPayload {
  name: string
  description: string
  tag: string
  category_id: number | string
  images?: File[]
  medias?: File[]
}


export type Product = {
  id: number;
  name: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type ProductsData = {
  data: Product[];
  meta: MetaData;
};
