import { PostInput } from '@/features/home/types/PostInput';
import { type } from 'os';
import React, { BaseSyntheticEvent } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Text } from '../text/Text';

type Props = {
  children: React.ReactNode;
  label?: string;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};

export const Form = (props: Props) => {
  const { children, label, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <Text>{label}</Text>
      {children}
    </form>
  );
};
