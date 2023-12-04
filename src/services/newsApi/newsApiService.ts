import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {
  NewsApiEverythingParameters,
  NewsApiEverythingResponse,
  NewsApiTopHeadlinesParameters,
  NewsApiTopHeadlinesResponse,
} from './types';

export const newsApiService = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
    prepareHeaders: (headers) => {
      headers.set('X-Api-Key', 'cf9643f02b4c487aa07f581bd42e4e7c');
    },
  }),
  endpoints: (builder) => ({
    getEverything: builder.query<
      NewsApiEverythingResponse,
      NewsApiEverythingParameters
    >({
      query: (params) => ({
        url: 'everything',
        params: {
          ...params,
          pageSize: 10,
          q: params.q || 'news',
        },
      }),
    }),
    getTopHeadlines: builder.query<
      NewsApiTopHeadlinesResponse,
      NewsApiTopHeadlinesParameters
    >({
      query: (params) => ({
        url: 'top-headlines',
        params,
      }),
    }),
  }),
});

export const {useGetEverythingQuery, useGetTopHeadlinesQuery} = newsApiService;
