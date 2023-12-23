import { Styles } from '@/types/styles';
import React from 'react';
import { PostColumn } from '@/types/post';
import { List } from '@/components/elements/list/List';
import { Record } from '@/features/report/components/Record';
import { ReportDomain } from '@/features/report/types/ReportDomain';

type Props = {
  data: ReportDomain[];
};

export const RecordList = (props: Props) => {
  const { data } = props;
  
  return (
    <List>
      {data.map((post) => (
        <Record key={post.id} data={post} />
      ))}
    </List>
  );
};
