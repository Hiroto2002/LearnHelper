import { Todo } from '@prisma/client';
import React from 'react';
import { Text } from '@/components/elements/text/Text';
import { Flex } from '@/components/elements/box/Flex';
import { Button } from '@/components/elements/button/Button';

export const TodoRecord = (props: Todo) => {
  const { createdAt, startDate, endDate, description, isEnd, title, id } = props;

  const dateString = new Date(createdAt).toLocaleDateString();
  const startDateString = startDate && new Date(startDate).toLocaleDateString();
  const endDateString = endDate && new Date(endDate).toLocaleDateString();

  return (
    <Flex
      direction="column"
      style={{ ...styles.container, backgroundColor: isEnd ? '#aaffaa' : '' }}
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
            <Button>開始</Button>
          )}
          {endDate ? <Text style={styles.date}>終了：{endDateString}</Text> : <Button>終了</Button>}
        </Flex>
      </Flex>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.title}>{status}</Text>
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
