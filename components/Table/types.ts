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

export type Props<T> = {
  actionButton: ActionButton;
  fields: FieldData[];
  data: T[];
  handleDelete: (row: any) => void;
  handleCreate: (params: T) => void;
  handleUpdate: (params: T) => void;
}