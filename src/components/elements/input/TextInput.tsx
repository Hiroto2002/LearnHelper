import React, { ComponentProps, forwardRef, RefObject } from 'react';
import { Input } from './Input';
import { Text } from '../text/Text';
import { Styles } from '@/types/styles';
import { POST_MODAL } from 'theme/postModal';

type Props = {
  label?: string;
} & ComponentProps<'input'>;

export const TextInput =forwardRef<HTMLInputElement,Props>((props: Props,ref) => {
  const { label,...inputProps } = props;
  return (
    <label>
      <Text >{label}</Text>
      <Input {...inputProps} type={'text'} ref={ref} style={styles.container}/>
    </label>
  );
});

const styles:Styles = {
  container:{
    ...POST_MODAL.container
  },
}