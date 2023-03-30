import React, { ComponentProps } from 'react';
import { Input } from './Input';
import { Text } from '../text/Text';

type Props = {
  children: React.ReactNode;
} & ComponentProps<'input'>;

export const RadioInput = (props: Props) => {
  const { children, ...inputProps } = props;
  return (
    <label>
      <Text>{children}</Text>
      <Input {...inputProps} type={'radio'} style={{ display: 'none' }} />
    </label>
  );
};
