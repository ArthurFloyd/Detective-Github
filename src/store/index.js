import { configureStore } from '@reduxjs/toolkit';

import { githubReposApi } from '../api/githubReposApi';

export const store = configureStore({
  reducer: {
    [githubReposApi.reducerPath]: githubReposApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubReposApi.middleware),
});

export default store;