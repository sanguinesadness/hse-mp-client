import { css } from '@emotion/css';
import {
  DEFAULT_SIDE_PADDING,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  SECTION_HEADER_HEIGHT
} from 'consts';

export const clientRootPageStyle = {
  content: css`
    min-height: calc(
      100vh - ${HEADER_HEIGHT} - ${SECTION_HEADER_HEIGHT} - ${FOOTER_HEIGHT}
    );
    padding: 0 ${DEFAULT_SIDE_PADDING};
  `
};
