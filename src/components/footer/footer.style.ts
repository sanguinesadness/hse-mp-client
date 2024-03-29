import { css } from '@emotion/css';
import { ColorsBasicEnum, DEFAULT_SIDE_PADDING, FOOTER_HEIGHT } from 'consts';

export const footerStyle = {
  wrapper: css`
    height: ${FOOTER_HEIGHT};
    padding: 0 ${DEFAULT_SIDE_PADDING};
    color: ${ColorsBasicEnum.WHITE};
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      91.05deg,
      ${ColorsBasicEnum.PRIMARY} 11.95%,
      ${ColorsBasicEnum.BLUE_PILLOW} 67.43%,
      ${ColorsBasicEnum.LIME_GREEN} 117.42%
    );
  `,
  projectTitle: css`
    max-width: 400px;
  `,
  copyright: css``
};
