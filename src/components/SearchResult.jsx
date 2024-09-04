import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetReposQuery } from '../api/githubReposApi';

const dateParse = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}.${month.toString().padStart(2, "0")}.${year}`;

  return formattedDate;
}

const SearchResult = ({ nameRepos }) => {

  const { data } = useGetReposQuery(nameRepos);

  const rows = data.items.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    forks: item.forks,
    stars: item.stargazers_count,
    dateUpdate: dateParse(item.updated_at),
  }));

  const columns = [
    { field: 'name', headerName: 'Название', width: 130 },
    { field: 'language', headerName: 'Язык', width: 130 },
    { field: 'forks', headerName: 'Число форков', width: 130 },
    { field: 'stars', headerName: 'Число звезд', width: 130 },
    { field: 'dateUpdate', headerName: 'Дата обнавления', width: 130 },
  ];

  return (
    <div>
      <div className="row">
        <h1>Результаты поиска</h1>
        <Box sx={{ left: 32, height: 912, width: 912 }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </div>
      <div className="result">
        Выберете репозиторий
      </div>
    </div>
  );
};

export default SearchResult;