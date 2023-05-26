import { css } from '@emotion/css';
import { AUTH_FOOTER_HEIGHT, AUTH_HEADER_HEIGHT } from 'consts';

export const authPageStyle = {
  wrapper: css`
    padding: 0 200px;
  `,
  content: css`
    min-height: calc(100vh - ${AUTH_HEADER_HEIGHT} - ${AUTH_FOOTER_HEIGHT});
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5vh;
  `
};
