import React, { useState } from 'react';
import { Box, Chip, CircularProgress } from '@mui/material';
import StarSharpIcon from '@mui/icons-material/StarSharp';
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

  const { data, isLoading, isError } = useGetReposQuery(nameRepos);

  if (isLoading) return <CircularProgress className='spiner' />

  if (isError) return <div className='err'>Not Found :(</div>

  const rows = data?.items?.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    forks: item.forks,
    stars: item.stargazers_count,
    dateUpdate: dateParse(item.updated_at),
  }));

  const columns = [
    { field: 'name', headerName: 'Название', width: 182 },
    { field: 'language', headerName: 'Язык', width: 182 },
    { field: 'forks', headerName: 'Число форков', width: 182 },
    { field: 'stars', headerName: 'Число звезд', width: 182 },
    { field: 'dateUpdate', headerName: 'Дата обнавления', width: 182 },
  ];

  const DescriptionRepo = (activeId) => {

    const selectedRepo = data?.items?.find(item => item.id === activeId);
    if (selectedRepo) {
      return (
        <div className='dis-txt'>
          <h2>{selectedRepo.name}</h2>
          <p>{selectedRepo.description}</p>
          <div className='info'>
            {selectedRepo.language ?
              <Chip sx={{ background: '#2196F3', color: '#fff' }} label={selectedRepo.language} /> :
              <p>{''}</p>}
            <div className='strs'>
              <StarSharpIcon sx={{ color: '#FFB400' }} />
              <div className='str-count' >{selectedRepo.stargazers_count}</div>
            </div>
          </div>
          <p className='license'>{selectedRepo.license ? selectedRepo.license.name : ''}</p>
        </div>
      );
    } else {
      return <div className='empt-des'>Выберите репозиторий</div>;
    }

  };
  // console.log('data', data)
  // console.log('activeIdRepo', activeIdRepo)
  return (
    <div className='search'>
      <div className='result'>
        <p className='result-text'>Результаты поиска</p>
        <Box className="table">
          <DataGrid rows={rows} columns={columns} onRowClick={(params) => setActiveIdRepo(params.row.id)}
          />
        </Box>
      </div>
      <div className='description'>
        {DescriptionRepo(activeIdRepo)}
      </div>
    </div>
  );
};

export default SearchResult;