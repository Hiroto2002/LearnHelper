import { Styles } from '@/types/styles';
import { ComponentProps } from 'react';
import { Button } from './Button';

type Button = {
  style: React.CSSProperties;
} & ComponentProps<'button'>;

export const RadiusButton = (props: Button) => {
  const { style, ...buttonProps } = props;
  return <Button {...buttonProps} style={{ ...style, ...styles.button }} />;
};

const styles: Styles = {
  button: {
    borderRadius: '50%',
    padding: '10px',
    border: 'none',
  },
};
