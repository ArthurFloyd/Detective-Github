import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl, OutlinedInput, Toolbar, Box, AppBar, Button,
} from '@mui/material';

import { useGetReposQuery } from '../api/githubReposApi';
import SearchResult from './SearchResult';
import HomePage from './Home';
// import { store } from '../store/index.js';

// const defaultRepo = { items: [{ id: 1, name: 'Название репозитория', language: 'Phyton', forks: 8, stars: 36, dateUpdate: '00.00.0000' }] };

const NavBar = () => {
  const [nameRepos, setNameRepos] = useState('');
  const [isClick, setIsClick] = useState(false)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { data } = useGetReposQuery(nameRepos);

  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ width: 1440, height: 80, background: '#739ab9' }}>
            <Toolbar>
              <form noValidate autoComplete="off">
                <FormControl ref={inputRef}>
                  <OutlinedInput
                    placeholder="Введите поисковый запрос"
                    sx={{
                      placeContent: 'italic', width: 912, height: 42, top: 10, background: '#fff',
                    }}
                    value={nameRepos}
                    onChange={(e) => setNameRepos(e.target.value)}
                  />
                </FormControl>
              </form>
              <Button
                variant="contained"
                onClick={() => {
                  // console.log('data', data);
                  setIsClick(true);
                }}
                sx={{
                  top: 9, left: 6, padding: '8px 22px 8px 22px', gap: 0, background: '#113047',
                }}
              >
                ИСКАТЬ
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        {isClick === false ? <HomePage /> : <SearchResult
          nameRepos={nameRepos}
        />}

        {/* <SearchResult
          nameRepos={nameRepos}
        /> */}
      </div>
    </div>
  );
};

export default NavBar;