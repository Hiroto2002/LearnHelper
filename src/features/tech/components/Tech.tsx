import { TechColumn } from '@/types/tech';
import { Styles } from '@/types/styles';
import React from 'react';
import { Text } from '@/components/elements/text/Text';
import { RecordContainer } from '@/components/layouts/Record/RecordContainer';
import { RecordTitle } from '@/components/layouts/Record/RecordTitle';
import { RecordPriority } from '@/components/layouts/Record/RecordPriority';
import { RecordPostCount } from '@/components/layouts/Record/RecordPostCount';

type Props = {
  data: TechColumn;
};

export const Tech = (props: Props) => {
  const { title, priority, postCount } = props.data;
  return (
    <RecordContainer>
      <RecordTitle>{title}</RecordTitle>
      <RecordPostCount postCount={postCount}/>
      <RecordPriority priority={priority}/>
    </RecordContainer>
  );
};
