import { RecordContainer } from '@/components/layouts/Record/RecordContainer';
import { RecordPriority } from '@/components/layouts/Record/RecordPriority';
import { RecordTechs } from '@/components/layouts/Record/RecordTechs';
import { RecordTitle } from '@/components/layouts/Record/RecordTitle';
import { PostColumn } from '@/types/post';
import React from 'react';

type Props = {
  data: PostColumn;
};

export const Post = (props: Props) => {
  const { title, priority, techs } = props.data;
  return (
    <RecordContainer>
      <RecordTitle>{title}</RecordTitle>
      <RecordTechs techs={techs} />
      <RecordPriority priority={priority} />
    </RecordContainer>
  );
};
