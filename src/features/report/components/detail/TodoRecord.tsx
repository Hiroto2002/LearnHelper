import { Todo } from '@prisma/client';
import React from 'react';
import { Text } from '@/components/elements/text/Text';
import { Flex } from '@/components/elements/box/Flex';
import { Button } from '@/components/elements/button/Button';

type Props = Todo & {
  onClickStart: (id: number) => Promise<void>;
  onClickEnd: (id: number) => Promise<void>;
};

export const TodoRecord = (props: Props) => {
  const { createdAt, startDate, endDate, description, isEnd, title, id, onClickStart,onClickEnd } = props;
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tokyo',
  };
  const dateString = new Date(createdAt).toLocaleDateString();
  const startDateString = startDate && new Date(startDate).toLocaleString('ja-JP', options);
  const endDateString = endDate && new Date(endDate).toLocaleString('ja-JP', options);

  return (
    <Flex
      direction="column"
      style={{ ...styles.container, backgroundColor: isEnd ? '' : '#aaffaa' }}
    >
      <Flex gap={10} justifyContent="space-between">
        {/* titleと日付 */}
        <Flex direction="column" gap={5}>
          <Text style={styles.title}>{title}</Text>
        </Flex>
        {/* 開始日と終了日 */}
        <Flex direction="column" gap={5}>
          {startDate ? (
            <Text style={styles.date}>開始：{startDateString}</Text>
          ) : (
            <Button onClick={() => onClickStart(id)}>開始</Button>
          )}

          {startDate &&
            (endDate ? (
              <Text style={styles.date}>終了：{endDateString}</Text>
            ) : (
              <Button onClick={() => onClickEnd(id)}>終了</Button>
            ))}
        </Flex>
      </Flex>
      <Text style={styles.desc}>{description}</Text>
      {/* <Text style={styles.title}>{}</Text> */}
    </Flex>
  );
};

const styles = {
  container: {
    padding: '10px ',
    margin: '10px 0',
    opacity: '0.8',
    boxShadow: '0 0 0 1px #aaa',
  },
  title: {
    fontSize: '16px',
  },
  date: {
    fontSize: '14px',
    color: '#333',
  },
  desc: {
    fontSize: '16px',
    color: '#333',
  },
};
