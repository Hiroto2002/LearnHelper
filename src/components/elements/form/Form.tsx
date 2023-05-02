import React, { BaseSyntheticEvent } from 'react';
import { Text } from '../text/Text';
import { Styles } from '@/types/styles';

type Props = {
  children: React.ReactNode;
  label?: string;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

export const Form = (props: Props) => {
  const { children, label, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} style={styles.container}>
      <Text>{label}</Text>
      {children}
    </form>
  );
};

const styles:Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
  },
}
    
