import { Styles } from '@/types/styles';
import React from 'react';
import { Post } from './Post';
import { PostColumn } from '@/types/post';
import { List } from '@/components/elements/list/list';

type Props={
  data: PostColumn[]
}
export const PostList = (props:Props) => {
  const { data } = props;
  return (
    <List>
      {data.map((post:PostColumn) => (
        <Post key={post.id} data={post}/>
      ))}
    </List>
  );
};


