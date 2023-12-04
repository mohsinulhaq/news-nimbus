# News Nimbus

## Description

News aggregator created using [React](https://react.dev), [Redux Toolkit](https://redux-toolkit.js.org), [RTK Query](https://redux-toolkit.js.org/rtk-query/overview), [Joy UI](https://mui.com/joy-ui/getting-started). The app was scaffolded for development using [Vite](https://vitejs.dev) and it uses [Storybook](https://storybook.js.org) for component development.

## Data Sources

- [NewsAPI](https://newsapi.org/docs/endpoints/everything)
- [NY Times API](https://developer.nytimes.com/docs/articlesearch-product/1/routes/articlesearch.json/get)
- [The Guardian API](https://open-platform.theguardian.com/documentation/search)

## Docker

- The app is containerized using [Docker](https://www.docker.com). The image is located at `mohsinulhaq/news-nimbus:latest` on [Docker Hub](https://hub.docker.com/r/mohsinulhaq/news-nimbus).
- To run the app using Docker, run the following command:

```bash
docker pull mohsinulhaq/news-nimbus:latest
docker run -p 3000:3000 mohsinulhaq/news-nimbus:latest
```

- Now open [http://localhost:3000](http://localhost:3000) to view it in the browser.
