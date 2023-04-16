import { TechColumn } from '@/types/tech';
import { Styles } from '@/types/styles';
import React from 'react';
import { Text } from '@/components/elements/text/Text';

type Props = {
  data: TechColumn;
};

export const Tech = (props: Props) => {
  const { title, priority, postCount } = props.data;
  return (
    <div style={styles.container}>
      <Text>{title}</Text>
      <Text>{priority}</Text>
      <Text>プロジェクトの数：{postCount}</Text>
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
