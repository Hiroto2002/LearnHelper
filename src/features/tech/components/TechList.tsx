import { Styles } from '@/types/styles';
import React from 'react';
import { Tech } from './Tech';
import { TechColumn } from '@/types/tech';
import { List } from '@/components/elements/list/list';

type Props={
  data: TechColumn[]
}
export const TechList = (props:Props) => {
  const { data } = props;
  return (
    <List >
      {data.map((tech:TechColumn) => (
        <Tech key={tech.id} data={tech}/>
      ))}
    </List>
  );
};

