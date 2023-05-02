import { CheckBoxInput } from '@/components/elements/input/CheckBoxInput';
import { Styles } from '@/types/styles';
import { TechColumn } from '@/types/tech';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { POST_MODAL } from 'theme/postModal';

type Props = {
  techData: TechColumn[];
  register: UseFormRegister<any>;
};

export const TechList = (props: Props) => {
  const {techData,register} = props
  return (
    <div style={styles.container}>
      {techData.map((tech) => (
        <CheckBoxInput
          {...register('techs', {
            required: '使用技術は必須です',
          })}
          value={tech.id}
          key={tech.id}
        >
          {tech.title}
        </CheckBoxInput>
      ))}
    </div>
  );
};

const styles:Styles = {
    container:{
        ...POST_MODAL.container,
        display:"flex",
    },
};