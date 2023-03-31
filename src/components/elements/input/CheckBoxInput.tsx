import React, { ComponentProps, forwardRef } from 'react';
import { Input } from './Input';
import { Text } from '../text/Text';

type Props = {
  children: React.ReactNode;
} & ComponentProps<'input'>;

export const CheckBoxInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, ...inputProps } = props;
  return (
    <label>
      <Text>{children}</Text>
      {/* <Input {...inputProps} type={'radio'} style={{ display: 'none' }} ref={null} /> */}
      <Input {...inputProps} type={'checkbox'} ref={ref} />
    </label>
  );
});
