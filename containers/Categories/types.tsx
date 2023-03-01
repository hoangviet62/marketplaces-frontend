export type Image = {
  id: number;
  url: string;
}

export type Category = {
  id: number;
  name: string;
  images: Image[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
};
