import {useState} from 'react';
import {useSelector} from 'react-redux';
import {IconButton, Link, Stack, Typography} from '@mui/joy';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import {newsApiService} from './services/newsApi/newsApiService';
import {ArticleGrid} from './components/ArticleGrid/ArticleGrid';
import {guardianService} from './services/guardian/guardianService';
import {nytimesService} from './services/nytimes/nytimesService';
import {SearchFilterBar} from './components/SearchFilterBar/SearchFilterBar';
import {SettingsModal} from './components/SettingsModal/SettingsModal';
import {RootState} from './store';
import {ThemeToggleButton} from './components/ThemeToggleButton/ThemeToggleButton';
import {
  getAuthorsFromStorage,
  getSourcesFromStorage,
} from './utils/localStorageUtils';

export function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();
  const [authorsFilter, setAuthorsFilter] = useState<string[]>(
    getAuthorsFromStorage()
  );
  const [sourcesFilter, setSourcesFilter] = useState<string[]>(
    getSourcesFromStorage()
  );
  const {authors, sources} = useSelector((state: RootState) => state.meta);

  const newsApiGetEverythingQuery = newsApiService.useGetEverythingQuery({
    q: searchQuery,
    from: fromDate,
    to: toDate,
  });
  const guardianSearchQuery = guardianService.useGetContentQuery({
    q: searchQuery,
    'from-date': fromDate,
    'to-date': toDate,
  });
  const nytimesSearchQuery = nytimesService.useArticleSearchQuery({
    q: searchQuery,
    begin_date: fromDate,
    end_date: toDate,
  });

  const isLoading =
    newsApiGetEverythingQuery.isLoading ||
    guardianSearchQuery.isLoading ||
    nytimesSearchQuery.isLoading ||
    newsApiGetEverythingQuery.isFetching ||
    guardianSearchQuery.isLoading ||
    nytimesSearchQuery.isLoading;

  const articles = [
    ...(newsApiGetEverythingQuery.data?.articles ?? []),
    ...(guardianSearchQuery.data?.response.results ?? []),
    ...(nytimesSearchQuery.data?.response.docs ?? []),
  ].filter(
    (article) =>
      (authorsFilter.length === 0 && sourcesFilter.length === 0) ||
      (authorsFilter.length > 0 &&
        sourcesFilter.length === 0 &&
        authorsFilter.includes(article.author ?? '')) ||
      (authorsFilter.length === 0 &&
        sourcesFilter.length > 0 &&
        sourcesFilter.includes(article.source.name ?? '')) ||
      (authorsFilter.length > 0 &&
        sourcesFilter.length > 0 &&
        (authorsFilter.includes(article.author ?? '') ||
          sourcesFilter.includes(article.source.name ?? '')))
  );

  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingX={2}
        paddingY={1}
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px, rgba(0, 0, 0, 0.2) 0px 2px 1px -1px"
        sx={{
          borderEndStartRadius: 10,
          borderEndEndRadius: 10,
        }}
      >
        <Typography
          component={Link}
          href="/"
          underline="none"
          level="h1"
          flex={1}
          textAlign="center"
        >
          News Nimbus
        </Typography>
        <IconButton
          title="Preferences"
          onClick={() => {
            setIsSettingsModalOpen((prev) => !prev);
          }}
        >
          <SettingsRoundedIcon />
        </IconButton>
        <ThemeToggleButton />
      </Stack>
      <Stack
        paddingX={2}
        gap={2}
      >
        <SearchFilterBar
          isSearching={isLoading}
          setSearchQuery={setSearchQuery}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          defaultAuthors={authorsFilter}
          defaultSources={sourcesFilter}
          authors={authors}
          sources={sources}
          onAuthorChange={(value) => {
            setAuthorsFilter(value);
          }}
          onSourceChange={(value) => {
            setSourcesFilter(value);
          }}
        />
        <ArticleGrid articles={articles} />
      </Stack>
      <SettingsModal
        isOpen={isSettingsModalOpen}
        setIsOpen={setIsSettingsModalOpen}
        onClose={() => {
          window.location.reload();
        }}
      />
    </Stack>
  );
}
