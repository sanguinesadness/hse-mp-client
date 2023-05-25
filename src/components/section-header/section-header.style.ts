import { css } from '@emotion/css';
import {
  ColorsBasicEnum,
  DEFAULT_SIDE_PADDING,
  SECTION_HEADER_HEIGHT,
  SMOOTH_BOUNCE_EASE
} from 'consts';

export const sectionHeaderStyle = {
  wrapper: css`
    background: linear-gradient(
      91.05deg,
      ${ColorsBasicEnum.PRIMARY} 11.95%,
      ${ColorsBasicEnum.BLUE_PILLOW} 67.43%,
      ${ColorsBasicEnum.LIME_GREEN} 117.42%
    );
    height: ${SECTION_HEADER_HEIGHT};
    position: sticky;
    top: 0;
  `,
  innerWrapper: css`
    padding: 0 ${DEFAULT_SIDE_PADDING};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  title: css`
    color: ${ColorsBasicEnum.WHITE};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
  `,
  caretButton: css`
    padding: 0 20px;
    cursor: pointer;
    transition: 200ms ${SMOOTH_BOUNCE_EASE} all;

    &:hover {
      transform: scale(0.95);
    }
  `,
  caretIcon: css`
    width: 60px;
    height: 60px;
    fill: ${ColorsBasicEnum.WHITE};
    transform: rotateZ(180deg);
    filter: drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.25));
  `
};
