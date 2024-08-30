import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
];
const getFullName = (value, row) => `${row.firstName || ''} ${row.lastName || ''}`;

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',

    width: 160,
    valueGetter: getFullName,
  },
];

const SearchResult = () => (
  <div>

    <div className="row">
      <h1>Результаты поиска</h1>
      <Box sx={{ height: 400, width: 970 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </div>
    <div className="result">
      Выберете репозиторий
    </div>
  </div>
);

export default SearchResult;