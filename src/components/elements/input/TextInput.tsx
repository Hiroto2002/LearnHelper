import React, { ComponentProps, forwardRef, RefObject } from 'react';
import { Input } from './Input';
import { Text } from '../text/Text';

type Props = {
  label: string;
} & ComponentProps<'input'>;
export const TextInput =forwardRef<HTMLInputElement,Props>((props: Props,ref) => {
  const { label,...inputProps } = props;
  return (
    <label>
      <Text>{label}</Text>
      <Input {...inputProps} type={'text'} ref={ref} />
    </label>
  );
});
