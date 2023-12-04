interface Source {
  id: string | null;
  name: string;
}

export type NewsArticle = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
