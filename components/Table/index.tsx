import React, { useCallback, useMemo, useState, useEffect } from 'react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Props } from './types'

export default function Table<T extends Record<string, any>>(props: Props<T>) {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<T[]>([]);
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  useEffect(() => {
    if (props.data) setTableData(props.data)
  }, [props.data])

  const columns = useMemo<MRT_ColumnDef<T>[]>(
    () => props.fields as any,
    []
  )

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
          },
        }}
        initialState={{ density: 'compact' }}
        enableDensityToggle={false}
        enableColumnFilters={false}
        enableColumnOrdering={false}
        enableColumnResizing={false}
        enableExpandAll={false}
        enableFullScreenToggle={false}
        columns={columns}
        data={tableData}
        editingMode="modal"
        enableEditing
        positionActionsColumn="last"
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => props.handleUpdate(row)}>
                <Edit fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error"
                onClick={() => props.handleDelete(row.original)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="primary"
            onClick={props.handleCreate}
            variant="contained"
          >
            {props.actionButton.text}
          </Button>
        )}
      />
    </>
  );
};
