import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { useGetReposQuery } from '../api/githubReposApi';
// import DescriptionRepo from './DescriptionRepo';

const dateParse = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}.${month.toString().padStart(2, "0")}.${year}`;

  return formattedDate;
}

const SearchResult = ({ nameRepos }) => {

  const [activeIdRepo, setActiveIdRepo] = useState(null);

  const { data } = useGetReposQuery(nameRepos);

  const rows = data?.items?.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    forks: item.forks,
    stars: item.stargazers_count,
    dateUpdate: dateParse(item.updated_at),
  }));

  const columns = [
    {
      field: 'name', headerName: 'Название', width: 130, renderCell: (params) => (
        <div onClick={() => setActiveIdRepo(params.row.id)}>
          {params.value}
        </div>
      )
    },
    { field: 'language', headerName: 'Язык', width: 130 },
    { field: 'forks', headerName: 'Число форков', width: 130 },
    { field: 'stars', headerName: 'Число звезд', width: 130 },
    { field: 'dateUpdate', headerName: 'Дата обнавления', width: 130 },
  ];

  const DescriptionRepo = (activeId) => {

    const selectedRepo = data?.items?.find(item => item.id === activeId);
    if (selectedRepo) {
      return (
        <div>
          <h2>{selectedRepo.name}</h2>
          <p>Описание: {selectedRepo.description}</p>
          <p>Язык: {selectedRepo.language}</p>
          <p>Количество звезд: {selectedRepo.stargazers_count}</p>
          <p>Лицензия: {selectedRepo.license ? selectedRepo.license.name : ''}</p>
        </div>
      );
    } else {
      return <div>Выберите репозиторий</div>;
    }

  };

  console.log('data', data)
  console.log('activeIdRepo', activeIdRepo)
  return (
    <div className='search'>
      <div className='result'>
        <h1>Результаты поиска</h1>
        <Box className="table" sx={{ left: 32, height: 912, width: 912 }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </div>
      <div className='description'>
        {DescriptionRepo(activeIdRepo)}
      </div>
    </div>
  );
};

export default SearchResult;