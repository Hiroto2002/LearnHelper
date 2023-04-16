import { Styles } from '@/types/styles';
import React from 'react';
import { Tech } from './Tech';
import { TechColumn } from '@/types/tech';

type Props={
  data: TechColumn[]
}
export const TechList = (props:Props) => {
  const { data } = props;
  return (
    <div style={styles.container}>
      {data.map((tech:TechColumn) => (
        <Tech key={tech.id} data={tech}/>
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    height: '100vh',
  },
};
