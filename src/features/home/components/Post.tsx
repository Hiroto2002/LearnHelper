import { PostColumn } from '@/types/post';
import { Styles } from '@/types/styles';
import React from 'react';
import { Text } from '@/components/elements/text/Text';
import { Tech } from '@/types/tech';

type Props = {
  data: PostColumn;
};

export const Post = (props: Props) => {
  const { title, priority, techs } = props.data;
  return (
    <div style={styles.container}>
      <Text>{title}</Text>
      <Text>{priority}</Text>
      {techs.map((tech:Tech, index:number) => (
        <Text key={index}>{tech.title}</Text>
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    height: '100px',
    width: '100vw',
    backgroundColor: '#ddd',
    margin: ' 0 0 10px 0',
  },
};
