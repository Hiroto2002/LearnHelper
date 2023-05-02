import React, { CSSProperties, ComponentProps,} from 'react';
import { Button } from './Button';

type Props={
    children:React.ReactNode;
} & ComponentProps<'button'>;

export const SubmitButton =(props:Props) => {
  return (
      <Button {...props} type={'submit'} style={style}/>
  );
}

const style:CSSProperties = {
    backgroundColor:'#ffa500',
    color:'#fff',
    padding:'10px 20px',
    borderRadius:'5px',
    border:'none',
    cursor:'pointer',
    fontSize:'15px',
    margin:'20px 0',
    width:'30vw',
}