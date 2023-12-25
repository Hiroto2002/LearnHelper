import { Flex } from '@/components/elements/box/Flex';
import { Text } from '@/components/elements/text/Text';
import { RecordContainer } from '@/components/layouts/Record/RecordContainer';
import { RecordTitle } from '@/components/layouts/Record/RecordTitle';
import { ReportDomain } from '@/features/report/types/ReportDomain';
import { Styles } from '@/types/styles';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: ReportDomain;
  handleEditClick: () => void;
};

export const Record = (props: Props) => {
  const { handleEditClick } = props;
  const { title, createdAt, id } = props.data;
  const dateString = new Date(createdAt).toLocaleDateString();
  return (
    <Flex gap={30} style={styles.container} justifyContent='space-around'>
      <Link href={`/report/${id}`}>
        <RecordTitle>{title}</RecordTitle>
        {/* <Text>{dateString}</Text> */}
      </Link>
      <button onClick={handleEditClick}>編集</button>
    </Flex>
  );
};

const styles:Styles ={
  container: {
    borderRadius: '15px',
    backgroundColor: '#fafafa',
    padding: '40px 10px',
  }
}