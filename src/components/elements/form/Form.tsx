import { type } from 'os';
import React from 'react';
import { Text } from '../text/Text';

type Props = {
  children: React.ReactNode;
  label?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = (props: Props) => {
  const { children, label, ...formProps } = props;
  return (
    <>
      <form {...formProps}>
      <Text>{label}</Text>
        {children}
        </form>
    </>
  );
};
