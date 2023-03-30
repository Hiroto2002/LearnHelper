import { Styles } from '@/types/styles';
import { ComponentProps, ReactNode } from 'react';
import { Button } from './Button';

type Button = {
  children: ReactNode;
  style: React.CSSProperties;
} & ComponentProps<'button'>;

export const RadiusButton = (props: Button) => {
  const {children,style,...buttonProps} = props
  return (
    <Button {...buttonProps} style={{ ...style, ...styles.button }}>
      {children}
    </Button>
  );
};

const styles: Styles = {
  button: { borderRadius: '50%', padding: '10px', border: 'none' },
};
