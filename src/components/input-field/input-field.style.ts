import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum } from 'consts';

export const inputFieldStyle = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  label: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    `
  },
  input: css`
    outline: none;
    font: inherit;
    border: 1px solid ${ColorsShadesEnum.GRAY_400};
    background: ${ColorsBasicEnum.WHITE};
    border-radius: 10px;
    padding: 7px 15px;

    &::placeholder {
      color: ${ColorsShadesEnum.GRAY_600};
    }
  `
};
