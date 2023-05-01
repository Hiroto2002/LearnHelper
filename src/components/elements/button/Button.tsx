import { Styles } from '@/types/styles';
import { CSSProperties, ComponentProps } from 'react';

type Props = {
  style?: CSSProperties;
} & ComponentProps<'button'>;

export const Button = (props: Props) => {
  const { style } = props;
  return <button {...props} style={{ ...style, ...styles.button }} />;
};

const styles: Styles = {
  button: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
};
