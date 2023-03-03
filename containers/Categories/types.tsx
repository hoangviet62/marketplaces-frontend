import { MetaData } from '@/components/Table/types'

export type Image = {
  id: number;
  url: string;
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

