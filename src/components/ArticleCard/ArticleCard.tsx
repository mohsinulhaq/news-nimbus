import {memo} from 'react';
import {Stack, Typography, IconButton} from '@mui/joy';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {formatIsoDate} from '../../utils/dateUtils';
import {
  NewsApiEverythingArticle,
  NewsApiTopHeadlinesArticle,
} from '../../services/newsApi/types';

export interface ArticleCardProps
  extends NewsApiEverythingArticle,
    NewsApiTopHeadlinesArticle {
  bookmarked?: boolean;
}

export const ArticleCard = memo(
  ({
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    author,
    source,
    bookmarked = false,
  }: ArticleCardProps) => {
    return (
      <Card
        component="article"
        size="sm"
        sx={{
          width: '100%',
          height: '100%',
          border: 0,
          padding: 0,
          overflow: 'hidden',
          justifyContent: 'space-between',
          boxShadow:
            'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px, rgba(0, 0, 0, 0.2) 0px 2px 1px -1px',
        }}
      >
        <Stack overflow="hidden">
          <Link href={url}>
            <img
              src={urlToImage!}
              width="100%"
              height={300}
              style={{objectFit: 'cover'}}
            />
          </Link>
          <CardContent
            sx={{
              paddingTop: 1,
              paddingX: 2,
              gap: 2,
              justifyContent: 'space-between',
            }}
          >
            <Stack gap={2}>
              <Stack component="header">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Typography
                    color="neutral"
                    level="title-sm"
                    flex={1}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    title={source.name}
                  >
                    {source.name}
                  </Typography>
                  <Typography
                    color="neutral"
                    level="title-sm"
                  >
                    {formatIsoDate(publishedAt)}
                  </Typography>
                </Stack>
                <Link
                  href={url}
                  underline="none"
                >
                  <Typography
                    level="h2"
                    title={title}
                    display="-webkit-box"
                    overflow="hidden"
                    sx={{
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {title}
                  </Typography>
                </Link>
                <Typography
                  level="title-sm"
                  color="neutral"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  by {author}
                </Typography>
              </Stack>
              <Stack component="section">
                <Link
                  href={url}
                  underline="none"
                >
                  <Typography
                    level="body-xs"
                    display="-webkit-box"
                    overflow="hidden"
                    sx={{
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {description}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
        <Stack
          component="footer"
          direction="row"
          justifyContent="space-between"
          paddingInline={2}
          paddingBottom={1}
        >
          <IconButton>
            <FavoriteBorderRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            {bookmarked ? (
              <BookmarkAddedRoundedIcon fontSize="small" />
            ) : (
              <BookmarkBorderRoundedIcon fontSize="small" />
            )}
          </IconButton>
          <IconButton>
            <IosShareRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Card>
    );
  }
);

ArticleCard.displayName = 'ArticleCard';
