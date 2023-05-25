import { css } from '@emotion/css';
import { AUTH_HEADER_HEIGHT } from 'consts';

export const authHeaderStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${AUTH_HEADER_HEIGHT};
    width: 100%;
  `
};
