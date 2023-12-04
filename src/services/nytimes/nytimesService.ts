import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {
  NytimesAdaptedSearchResponse,
  NytimesSearchParameters,
  NytimesSearchResponse,
} from './types';
import {nytimesArticleToNewsArticleAdapter} from '../../utils/articleAdapters';

export const nytimesService = createApi({
  reducerPath: 'nytimes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2/',
  }),
  endpoints: (builder) => ({
    articleSearch: builder.query<
      NytimesAdaptedSearchResponse,
      NytimesSearchParameters
    >({
      query: (params) => ({
        url: 'articlesearch.json',
        params: {
          ...params,
          'api-key': 'CIAAKnkswXG3DWweXvoSsXLbDQbqaB7b',
        },
      }),
      transformResponse: (
        response: NytimesSearchResponse
      ): NytimesAdaptedSearchResponse => {
        return {
          ...response,
          response: {
            ...response.response,
            docs: response.response.docs.map(
              nytimesArticleToNewsArticleAdapter
            ),
          },
        } as NytimesAdaptedSearchResponse;
      },
    }),
  }),
});

export const {useArticleSearchQuery} = nytimesService;
