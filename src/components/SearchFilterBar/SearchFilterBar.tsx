import {memo} from 'react';
import {Autocomplete, Input, Stack} from '@mui/joy';
import CircularProgress from '@mui/joy/CircularProgress';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {formatDate} from '../../utils/dateUtils';

export interface SearchFilterBarProps {
  setSearchQuery: (query: string) => void;
  isSearching?: boolean;
  fromDate?: string;
  setFromDate: (date?: string) => void;
  toDate?: string;
  setToDate: (date?: string) => void;
  defaultAuthors?: string[];
  defaultSources?: string[];
  authors: string[];
  sources: string[];
  onAuthorChange: (authors: string[]) => void;
  onSourceChange: (sources: string[]) => void;
}

export const SearchFilterBar = memo(
  ({
    setSearchQuery,
    isSearching = false,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    defaultAuthors = [],
    defaultSources = [],
    authors = [],
    sources = [],
    onAuthorChange,
    onSourceChange,
  }: SearchFilterBarProps) => {
    return (
      <Stack gap={2}>
        <Input
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setSearchQuery(event.currentTarget.value);
            }
          }}
          placeholder="Search News Nimbus"
          endDecorator={isSearching ? <CircularProgress size="sm" /> : null}
        />
        <Stack
          direction={{xs: 'column', sm: 'row'}}
          justifyContent="space-between"
          gap={2}
        >
          <Autocomplete
            multiple
            placeholder="Authors"
            defaultValue={defaultAuthors}
            options={authors}
            onChange={(_, value) => {
              onAuthorChange(value);
            }}
          />
          <Autocomplete
            multiple
            placeholder="Sources"
            defaultValue={defaultSources}
            options={sources}
            onChange={(_, value) => {
              onSourceChange(value);
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            gap={1}
          >
            <DatePicker
              withPortal
              placeholderText="From"
              value={fromDate?.toString()}
              onChange={(date: Date) => setFromDate(formatDate(date))}
              customInput={
                <Input
                  sx={{
                    width: {
                      xs: 100,
                      sm: '100%',
                    },
                  }}
                />
              }
            />
            <DatePicker
              withPortal
              placeholderText="To"
              value={toDate?.toString()}
              onChange={(date: Date) => setToDate(formatDate(date))}
              customInput={
                <Input
                  sx={{
                    width: {
                      xs: 100,
                      sm: '100%',
                    },
                  }}
                />
              }
            />
          </Stack>
        </Stack>
      </Stack>
    );
  }
);

SearchFilterBar.displayName = 'SearchFilterBar';
