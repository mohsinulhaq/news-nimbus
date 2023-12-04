const AUTHORS_STORAGE_KEY = 'news-nimbus:authors';
const SOURCES_STORAGE_KEY = 'news-nimbus:sources';

export const getAuthorsFromStorage = () => {
  return (localStorage.getItem(AUTHORS_STORAGE_KEY)?.split(',') ?? []).filter(
    Boolean
  );
};

export const getSourcesFromStorage = () => {
  return (localStorage.getItem(SOURCES_STORAGE_KEY)?.split(',') ?? []).filter(
    Boolean
  );
};
