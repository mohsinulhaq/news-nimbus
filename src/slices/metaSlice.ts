import {createSlice} from '@reduxjs/toolkit';
import {newsApiService} from '../services/newsApi/newsApiService';
import {nytimesService} from '../services/nytimes/nytimesService';
import {guardianService} from '../services/guardian/guardianService';

type SliceState = {
  authors: string[];
  sources: string[];
};

const initialState: SliceState = {
  authors: [],
  sources: [],
};

export const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        newsApiService.endpoints.getEverything.matchFulfilled,
        (state, action) => {
          state.authors = Array.from(
            new Set(
              action.payload.articles
                .map((article) => article.author ?? '')
                .filter(Boolean)
            )
          );
          state.sources.push(
            ...Array.from(
              new Set(
                action.payload.articles
                  .map((article) => article.source.name)
                  .filter(Boolean)
              )
            )
          );
        }
      )
      .addMatcher(
        nytimesService.endpoints.articleSearch.matchFulfilled,
        (state, action) => {
          state.authors.push(
            ...Array.from(
              new Set(
                action.payload.response.docs
                  // @ts-expect-error TODO: fix this
                  .map((article) => article.author ?? '')
                  .filter(Boolean)
              )
            )
          );
          state.sources.push(
            ...Array.from(
              new Set(
                action.payload.response.docs
                  // @ts-expect-error TODO: fix this
                  .map((article) => article.source.name)
                  .filter(Boolean)
              )
            )
          );
        }
      )
      .addMatcher(
        guardianService.endpoints.getContent.matchFulfilled,
        (state, action) => {
          state.authors.push(
            ...Array.from(
              new Set(
                action.payload.response.results
                  // @ts-expect-error TODO: fix this
                  .map((article) => article.author ?? '')
                  .filter(Boolean)
              )
            )
          );
          state.sources.push(
            ...Array.from(
              new Set(
                action.payload.response.results
                  // @ts-expect-error TODO: fix this
                  .map((article) => article.source.name)
                  .filter(Boolean)
              )
            )
          );
        }
      );
  },
});
