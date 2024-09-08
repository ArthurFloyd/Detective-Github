import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl, OutlinedInput, Toolbar, Box, AppBar, Button,
} from '@mui/material';

import { useGetReposQuery } from '../api/githubReposApi';
import SearchResult from './SearchResult';
import HomePage from './Home';

const NavBar = () => {
  const [nameRepos, setNameRepos] = useState('');
  const [isClick, setIsClick] = useState(false)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { data } = useGetReposQuery(nameRepos);
  console.log(data)
  return (
    <div>
      <div className='nav'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ marginTop: 0, width: 1440, height: 80, background: '#739ab9' }}>
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
      </div>
    </div >
  );
};

export default NavBar;