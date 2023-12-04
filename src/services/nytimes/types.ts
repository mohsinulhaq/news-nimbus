import {NewsArticle} from '../types';

export type NytimesSearchParameters = {
  q?: string;
  fq?: number;
  begin_date?: string;
  end_date?: string;
  page?: number;
};

export type NytimesArticle = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: {
    rank: number;
    subtype: string;
    caption: string;
    credit: string;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: {
      xlarge: string;
      xlargewidth: number;
      xlargeheight: number;
    };
    subType: string;
    crop_name: string;
  }[];
  headline: {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
  };
  keywords: {
    name: string;
    value: string;
    rank: number;
    major: string;
  }[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: {
    original: string;
    person: {
      firstname: string;
      middlename: string;
      lastname: string;
      qualifier: string;
      title: string;
      role: string;
      organization: string;
      rank: number;
    };
    organization: string;
  };
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
};

export type NytimesSearchResponse = {
  status: string;
  copyright: string;
  response: {
    docs: NytimesArticle[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
};

export type NytimesAdaptedSearchResponse = NytimesSearchResponse & {
  status: string;
  copyright: string;
  response: {
    docs: NewsArticle[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
};
