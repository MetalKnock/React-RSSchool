import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GetCharacters } from '../../api/types';
import { API_BASE, ApiPath } from '../../config/constants';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  tagTypes: ['Characters'],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (build) => ({
    fetchCharacters: build.query<GetCharacters, string>({
      query: (query) => ({
        url: `${ApiPath.character}/?name=${query}`,
      }),
      providesTags: (result) =>
        result
          ? [...result.results.map(({ id }) => ({ type: 'Characters' as const, id })), 'Characters']
          : ['Characters'],
    }),
  }),
});

export const { useFetchCharactersQuery, useLazyFetchCharactersQuery } = characterApi;
