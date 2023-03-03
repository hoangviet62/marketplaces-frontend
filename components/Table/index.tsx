import React, { useMemo, useState, useEffect } from 'react'
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { Props } from './types'

export default function Table<T extends Record<string, unknown>>(props: Props<T>) {
  const [tableData, setTableData] = useState<T[]>([])

  useEffect(() => {
    if (props.data) setTableData(props.data.data)
  }, [props.data])

  // eslint-disable-next-line
  const columns = useMemo<MRT_ColumnDef<T>[]>(() => props.fields as any, [])

  console.log(props.data?.meta)

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
        manualPagination
        rowCount={props.data?.meta.total_items}
        renderRowActions={({ row }) => (
          <Box sx={{ display: 'flex' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => props.handleUpdate(row.original)}>
                <Edit fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton
                color="error"
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
            onClick={() => props.handleCreate()}
            variant="contained"
          >
            {props.actionButton.text}
          </Button>
        )}
      />
    </>
  )
}
