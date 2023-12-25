import { Styles } from '@/types/styles';
import React from 'react';

type Props = {
  onClick: () => void;
};

export const Overlay = (props: Props) => {
  return (
        <div style={styles.overlay} {...props}/>
  );
};

const styles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
};
