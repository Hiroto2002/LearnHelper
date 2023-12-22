import { Text } from '@/components/elements/text/Text';
import { RecordContainer } from '@/components/layouts/Record/RecordContainer';
import { RecordTitle } from '@/components/layouts/Record/RecordTitle';
import { ReportDomain } from '@/features/report/types/ReportDomain';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: ReportDomain;
};

export const Record = (props: Props) => {
  const { title, createdAt, id } = props.data;
  const dateString = new Date(createdAt).toLocaleDateString();
  return (
    <Link href={`/report/${id}`}>
      <RecordContainer>
        <RecordTitle>{title}</RecordTitle>
        <Text>{dateString}</Text>
      </RecordContainer>
    </Link>
  );
};
