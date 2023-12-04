import type {Meta, StoryObj} from '@storybook/react';

import {SearchFilterBar} from '../src/components/SearchFilterBar/SearchFilterBar';

const meta = {
  component: SearchFilterBar,
} satisfies Meta<typeof SearchFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    authors: ['Author 1', 'Author 2'],
    sources: ['Source 1', 'Source 2'],
  },
};
