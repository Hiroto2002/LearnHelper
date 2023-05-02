import { RadioInput } from '@/components/elements/input/RadioInput';
import { Styles } from '@/types/styles';
import React from 'react';
import {  UseFormRegister } from 'react-hook-form';
import { POST_MODAL } from 'theme/postModal';
import { Text } from '@/components/elements/text/Text';

type Props = {
  register: UseFormRegister<any>;
};

export const Priorities = (props:Props) => {
  const { register } = props;
  
  return (
    <div style={styles.container}>
        <Text>優先度:</Text>
      {Array.from({length:3}).map((_,index) => (
        <RadioInput
          key={index}
          {...register("priority", {
            required: '優先度は必須です',
          })}
          value={index+1}
        >
          {index+1}
        </RadioInput>
      ))}
    </div>
  );
};


const styles:Styles = {
    container:{
      ...POST_MODAL.container,
      color:"#666"
    },
  }
