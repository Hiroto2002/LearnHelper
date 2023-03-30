import React, { ComponentProps } from 'react';
import { Input } from './Input';
import { Text } from '../text/Text';

type Props = {
  label: string;
} & ComponentProps<'input'>;
export const TextInput = (props: Props) => {
  const { label,...inputProps } = props;
  return (
    <label>
      <Text>{label}</Text>
      <Input {...inputProps} type={'text'} />
    </label>
  );
};
