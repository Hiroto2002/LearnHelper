import { Styles } from '@/types/styles';
import React from 'react';
import { Post } from './Post';
import { PostColumn } from '@/types/post';

type Props={
  data: PostColumn[]
}
export const PostList = (props:Props) => {
  const { data } = props;
  return (
    <div style={styles.container}>
      {/* {data.map((post:PostColumn) => (
        <Post key={post.id} data={post}/>
      ))} */}
    </div>
  );
};

const styles: Styles = {
  container: {
    height: '100vh',
  },
};
