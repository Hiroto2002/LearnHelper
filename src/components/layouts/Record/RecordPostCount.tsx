import React, { CSSProperties } from 'react';
import { Text } from '@/components/elements/text/Text';
type Props = {
  postCount: number;
};

export const RecordPostCount = (props: Props) => {
  const { postCount } = props;
  return <Text style={styles}>投稿数：{postCount}</Text>;
};

const styles: CSSProperties = {
  fontSize: '15px',
  margin: '10px 50px 10px 5px',
  color: '#888',
};
