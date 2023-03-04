import { MetaData } from "@/components/Table/types";
import { Image } from './image'

export interface BannerPayload {
  description: string;
  linkTo: string;
  medias?: File[];
  images?: File[];
}

export type Banner = {
  id: number;
  linkTo: string;
  description: string;
  images: Image[];
  medias: Image[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type BannersData = {
  data: Banner[];
  meta: MetaData;
};
