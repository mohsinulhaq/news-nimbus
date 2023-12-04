import {memo} from 'react';
import {Grid} from '@mui/joy';
import {ArticleCard, ArticleCardProps} from '../ArticleCard/ArticleCard';

export interface ArticleGridProps {
  articles: ArticleCardProps[];
}

export const ArticleGrid = memo(({articles}: ArticleGridProps) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {articles.map((article, index) => (
        <Grid
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <ArticleCard {...article} />
        </Grid>
      ))}
    </Grid>
  );
});

ArticleGrid.displayName = 'ArticleGrid';
