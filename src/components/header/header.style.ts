import { css } from '@emotion/css';
import { DEFAULT_SIDE_PADDING, HEADER_HEIGHT } from 'consts';

export const headerStyle = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${HEADER_HEIGHT};
    padding: 0 ${DEFAULT_SIDE_PADDING};
  `
};
