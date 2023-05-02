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
        width:'60%',
        height:'90%',
        padding:'10px',
        borderRadius:'10px',
        margin:'0 auto',
        position:'absolute',
        zIndex:101,
        top:'5%',
        left:'20%',
    }
}