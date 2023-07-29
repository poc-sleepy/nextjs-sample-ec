import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../src/themes';
import * as NextImage from 'next/image';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    transition: .25s;
    color: #000;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // themeの適用
  // https://zenn.dev/enish/articles/ff678649ecb6d9#3-1.-%E5%80%8B%E5%88%A5%E3%81%ABtheme%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99%E5%A0%B4%E5%90%88%E3%81%AEstories.tsx%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9
  // 期待どおりの効果が出ているかは謎
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    ),
  ],
};

export default preview;
