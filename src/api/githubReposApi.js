import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubReposApi = createApi({
  reducerPath: 'repos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/repositories' }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (name) => `?q=${name}`,
    }),
  }),
});

export const {
  useGetReposQuery,
} = githubReposApi;