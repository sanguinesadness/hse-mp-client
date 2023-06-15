import React from 'react';
import { separatorStyle } from './separator.style';

type TSeparatorProps = {
  height: number;
};

export const Separator = ({ height }: TSeparatorProps): JSX.Element => {
  return <div className={separatorStyle(height).wrapper} />;
};

export default Separator;
