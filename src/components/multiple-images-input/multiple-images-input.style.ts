import { css } from '@emotion/css';

export const multipleImagesInputStyle = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  label: css``,
  imagesGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  `
};
