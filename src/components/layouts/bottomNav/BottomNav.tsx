import { Button } from '@/components/elements/button/Button';
import { Styles } from '@/types/styles';
import React from 'react';
import {Nav} from '../../elements/nav/Nav';

type Props={
  handlePushRouter:(path:string)=>void
  isActive:(path:string)=>boolean
}
export const BottomNav = (props:Props) => {
    const {handlePushRouter,isActive} =props
  return (
    <Nav styles={styles.container}>
      <Button style={styles.button} onClick={()=>handlePushRouter("/home")}>home</Button>
      <Button  style={styles.button} onClick={()=>handlePushRouter("/tech")}>tech</Button>
    </Nav>
  );
};

const styles: Styles = {
    container:{
        display:"flex",
        position:"fixed",
        bottom:0,
        height:"100px",
        width:"100vw",
    },
    button:{
        width:"50%",
    }
};
