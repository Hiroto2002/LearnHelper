import { PostColumn } from '@/types/post';
import React from 'react';
import { RecordTitle } from '@/components/layouts/Record/RecordTitle';
import { RecordContainer } from '@/components/layouts/Record/RecordContainer';
import { RecordTechs } from '@/components/layouts/Record/RecordTechs';
import { RecordPriority } from '@/components/layouts/Record/RecordPriority';

type Props = {
  data: PostColumn;
};

export const Post = (props: Props) => {
  const { title, priority, techs } = props.data;
  return (
    <RecordContainer>
      <RecordTitle>{title}</RecordTitle>
      <RecordTechs techs={techs}/>
      <RecordPriority priority={priority}/>
    </RecordContainer>
  );
};
