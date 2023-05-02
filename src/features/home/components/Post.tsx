import { PostColumn } from '@/types/post';
import React from 'react';
import { RecordTitle } from '@/components/layouts/record/RecordTitle';
import { RecordContainer } from '@/components/layouts/record/RecordContainer';
import { RecordTechs } from '@/components/layouts/record/RecordTechs';
import { RecordPriority } from '@/components/layouts/record/RecordPriority';

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
