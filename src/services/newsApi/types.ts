import {NewsArticle} from '../types';

interface BaseParams {
  q: string;
  pageSize?: number;
  page?: number;
}

export type SearchIn = 'title' | 'description' | 'content';
export type SortyBy = 'relevancy' | 'popularity' | 'publishedAt';

export type NewsApiEverythingParameters = BaseParams & {
  searchIn?: SearchIn;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: SortyBy;
};

interface Source {
  id: string | null;
  name: string;
}

export type NewsApiEverythingArticle = NewsArticle;

export type NewsApiEverythingResponse = {
  status: string;
  totalResults: number;
  articles: NewsApiEverythingArticle[];
};

export type NewsApiTopHeadlinesParameters = BaseParams &
  (
    | {
        country?: string;
        category?: string;
      }
    | {sources?: string}
  );

export type NewsApiTopHeadlinesArticle = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type NewsApiTopHeadlinesResponse = {
  status: string;
  totalResults: number;
  articles: NewsApiTopHeadlinesArticle[];
};
