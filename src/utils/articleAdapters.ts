import {GuardianArticle} from '../services/guardian/types';
import {NytimesArticle} from '../services/nytimes/types';
import {NewsArticle} from '../services/types';

export const guardianSearchToNewsArticleAdapter = (
  article: GuardianArticle
): NewsArticle => {
  return {
    source: {
      id: article.fields.publication,
      name: article.fields.publication,
    },
    author: article.fields.byline,
    title: article.webTitle,
    description: article.webTitle,
    url: article.webUrl,
    urlToImage: article.fields.thumbnail,
    publishedAt: article.webPublicationDate,
    content: article.webTitle,
  };
};

export const nytimesArticleToNewsArticleAdapter = (
  article: NytimesArticle
): NewsArticle => {
  return {
    source: {
      id: article.source,
      name: article.source,
    },
    // remove 'By ' from author name
    author: article.byline.original?.slice?.(3),
    title: article.headline.main,
    description: article.lead_paragraph,
    url: article.web_url,
    urlToImage:
      'https://static01.nyt.com/' + (article.multimedia?.[0]?.url ?? ''),
    publishedAt: article.pub_date,
    content: article.lead_paragraph,
  };
};
