import { MetaData } from "@/components/Table/types";
import { Image } from './image'
import { Supplier } from "./supplier";

export interface ProductPayload {
  name: string
  description: string
  tag: string
  category_id: number | string
  images?: File[]
  medias?: File[],
  delete_images?: [],
  delete_medias?: [],
}


export type Product = {
  id: number;
  name: string;
  description: string;
  tag: string;
  supplier: Supplier;
  images: Image[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type ProductsData = {
  data: Product[];
  meta: MetaData;
};
