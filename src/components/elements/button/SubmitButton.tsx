import React, { ComponentProps,} from 'react';
import { Button } from './Button';

type Props={
    children:React.ReactNode;
} & ComponentProps<'button'>;

export const SubmitButton =(props:Props) => {
  return (
      <Button {...props} type={'submit'}/>
  );
}