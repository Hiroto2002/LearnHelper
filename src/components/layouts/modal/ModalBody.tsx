import { Styles } from '@/types/styles';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
export const ModalBody = (props: Props) => {
  const { children } = props;
  return <div style={styles.modalBody}>{children}</div>;
};

const styles:Styles={
    modalBody:{
        backgroundColor:'#eee',
        padding:'10px',
        borderRadius:'10px',
        zIndex:101,
        transform: "translateY(-50%)",
        position: "fixed",
        top: "50%",
        maxWidth: "80%",
        left:"10%",
        width:"80%"
    }
}