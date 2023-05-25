import { css } from '@emotion/css';
import { AUTH_FOOTER_HEIGHT } from 'consts';

export const authFooterStyle = {
  wrapper: css`
    margin-top: auto;
    height: ${AUTH_FOOTER_HEIGHT};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  `,
  projectTitle: css`
    width: 410px;
  `
};
