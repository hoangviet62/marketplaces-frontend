/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CategoryInterface {
  id?: number;
  name?: string;
  images?: string[];
}

export interface CategoryProps {
  // should be CategoryInterface[]
  data: any[]
}