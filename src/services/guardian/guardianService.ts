import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {
  GuardianAdaptedSearchResponse,
  GuardianSearchParameters,
  GuardianSearchResponse,
} from './types';
import {guardianSearchToNewsArticleAdapter} from '../../utils/articleAdapters';

export const guardianService = createApi({
  reducerPath: 'guardian',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://content.guardianapis.com/',
  }),
  endpoints: (builder) => ({
    getContent: builder.query<
      GuardianAdaptedSearchResponse,
      GuardianSearchParameters
    >({
      query: (params) => ({
        url: 'search',
        params: {
          ...params,
          'show-fields': 'thumbnail,publication,byline',
          'api-key': '6bd0c77b-6d48-452a-9d15-f8b0fb46aeee',
        },
      }),
      transformResponse: (
        response: GuardianSearchResponse
      ): GuardianAdaptedSearchResponse => {
        return {
          ...response,
          response: {
            ...response.response,
            results: response.response.results.map(
              guardianSearchToNewsArticleAdapter
            ),
          },
        } as GuardianAdaptedSearchResponse;
      },
    }),
  }),
});

export const {useGetContentQuery} = guardianService;
