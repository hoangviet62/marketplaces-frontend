import { MetaData } from "@/components/Table/types";
import { Image } from './image'

export interface CategoryProps {
  // should be CategoryInterface[]
  data: any[]
}

export interface CategoryPayload {
  name: string;
  images?: File[];
}

export type Category = {
  id: number;
  name: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type CategoriesData = {
  data: Category[];
  meta: MetaData;
};
