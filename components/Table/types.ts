/* eslint-disable @typescript-eslint/no-explicit-any */
export type ActionButton = {
  text: string
}

export type FieldData = {
  accessorKey: any;
  header: string;
  enableColumnOrdering?: boolean;
  enableEditing?: boolean;
  enableSorting?: boolean;
  size?: number;
  muiTableBodyCellEditTextFieldProps?: () => void;
}

export type MetaData ={
  nextPage: number;
  previousPage: number;
  currentPage: number;
  totalPages: number;
  offset: number;
  totalItems: number;
  sort: string;
  perPage: number;
}

export type Props<T> = {
  actionButton: ActionButton;
  fields: FieldData[];
  data: {
    data: T[];
    meta: MetaData;
  };
  handleDelete: (row: T) => void;
  handleCreate: () => void;
  handleUpdate: (params: T) => void;
  handlePagination: (meta: {page: number, perPage: number}) => void;
}