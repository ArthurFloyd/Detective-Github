import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl, OutlinedInput, Toolbar, Box, AppBar, Button,
} from '@mui/material';

import { useGetReposQuery } from '../api/githubReposApi';
// import { store } from './store/index.js';

const NavBar = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { data } = useGetReposQuery(value);
  // console.log('value', useGetReposQuery(value))

  return (
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
          </form>
          <Button
            variant="contained"
            onClick={() => {
              console.log('data', data);
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
  );
};

export default NavBar;