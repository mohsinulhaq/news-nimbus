import type {Meta, StoryObj} from '@storybook/react';

import {ArticleCard} from '../src/components/ArticleCard/ArticleCard';

const meta = {
  component: ArticleCard,
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    title: 'Article Title',
    description: 'Article Description',
    urlToImage: 'https://picsum.photos/seed/picsum/1600/900',
    url: 'https://www.google.com',
    source: {
      id: 'BBC',
      name: 'BBC',
    },
    author: 'John Doe',
    publishedAt: '2023-12-03T10:59:00+00:00',
    content: 'Article Content',
  },
};

export const Full: Story = {
  decorators: [
    (Story) => (
      <div style={{width: '100vw', height: '100vh', margin: -16}}>
        <Story />
      </div>
    ),
  ],
  args: {
    title:
      'Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title',
    description:
      'Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description',
    urlToImage: 'https://picsum.photos/seed/picsum/1600/900',
    url: 'https://www.google.com',
    source: {
      id: 'BBC',
      name: 'BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC',
    },
    author:
      'John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe',
    publishedAt: '2023-12-03T04:15:00+00:00',
    content: 'Article content',
  },
};

export const Constrained: Story = {
  decorators: [
    (Story) => (
      <div style={{width: 300, height: 400}}>
        <Story />
      </div>
    ),
  ],
  args: {
    title:
      'Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title Article Title',
    description:
      'Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description Article Description',
    urlToImage: 'https://picsum.photos/seed/picsum/1600/900',
    url: 'https://www.google.com',
    source: {
      id: 'BBC',
      name: 'BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC BBC',
    },
    author:
      'John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe',
    publishedAt: '2023-12-03T04:15:00+00:00',
    content: 'Article content',
  },
};
