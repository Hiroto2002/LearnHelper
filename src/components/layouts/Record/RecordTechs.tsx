import { Text } from '@/components/elements/text/Text';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { TechColumn } from '@/types/tech';

type Props = {
    techs: TechColumn[];
};
export const RecordTechs = (props: Props) => {
  const { techs } = props;
  return (
    <>
      <Image src="/icon/tag.svg" width={15} height={15} alt="タグ" />
      {techs.map((tech: TechColumn, index: number) => (
        <Text key={index} style={styles}>{tech.title},</Text>
      ))}
    </>
  );
};

const styles: CSSProperties = {
    fontSize: '15px',
    margin: '10px 50px 10px 5px',
    color: '#888',
};
