import {NewsArticle} from '../types';

export type GuardianSearchParameters = {
  q?: string;
  'from-date'?: string;
  'to-date'?: string;
  'order-by'?: string;
  'page-size'?: number;
  page?: number;
};

export type GuardianArticle = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    byline: string;
    publication: string;
    thumbnail: string;
  };
};

export type GuardianSearchResponse = {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: GuardianArticle[];
  };
};

export type GuardianAdaptedSearchResponse = GuardianSearchResponse & {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: NewsArticle[];
  };
};
