import { RecordContainer } from '@/components/layouts/record/RecordContainer';
import { RecordPriority } from '@/components/layouts/record/RecordPriority';
import { RecordTechs } from '@/components/layouts/record/RecordTechs';
import { RecordTitle } from '@/components/layouts/record/RecordTitle';
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
