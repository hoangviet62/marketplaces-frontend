import React, { useMemo, useState, useEffect } from 'react'
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { Props } from './types'

const DEFAULT_META = {
  totalItems: 0,
  currentPage: 0,
  perPage: 10
}

export default function Table<T extends Record<string, unknown>>(props: Props<T>) {
  const [tableData, setTableData] = useState<T[]>([])
  const metaData = props?.data?.meta || DEFAULT_META
  const {totalItems} = metaData

  useEffect(() => {
    if (props.data?.data) setTableData(props.data.data)
  }, [props.data])

  // eslint-disable-next-line
  const columns = useMemo<MRT_ColumnDef<T>[]>(() => props.fields as any, [])

  const [pagination, setPagination] = useState({
    pageIndex: metaData.currentPage,
    pageSize: metaData.perPage,
  });

  useEffect(() => {
    const customPagination = {...pagination}
    if (!props.data) customPagination.pageIndex = 0
    setPagination(customPagination)

    props.handlePagination({
      page: pagination.pageIndex + 1,
      perPage: pagination.pageSize
    })
  }, [pagination.pageIndex, pagination.pageSize, props.data]);

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
        rowCount={totalItems}
        onPaginationChange={setPagination}
        state={{ pagination }}
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
