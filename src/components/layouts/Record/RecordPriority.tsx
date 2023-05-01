import { Text } from '@/components/elements/text/Text';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { TechColumn } from '@/types/tech';
import { Styles } from '@/types/styles';

type Props = {
  priority: number;
};
export const RecordPriority = (props: Props) => {
  const { priority } = props;

  const items = Array.from({ length: priority }).map((_, i) => <div key={i}>Hello, world!</div>);

  return (
    <div style={styles.container}>
      {Array.from({ length: priority }).map((_, i) => (
        <Image src={'/icon/priority.svg'} width={30} height={30} alt="重要度" key={i}/>
      ))}
    </div>
  );
};

const styles: Styles = {
    container:{
        position: 'absolute',
        right: "15px",
        top: "15px"
    },
};
