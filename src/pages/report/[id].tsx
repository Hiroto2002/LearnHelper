import { Flex } from '@/components/elements/box/Flex';
import { Text } from '@/components/elements/text/Text';
import { Header } from '@/components/layouts/header/Header';
import { TodoRecord } from '@/features/report/components/detail/TodoRecord';
import { ReportDomainDetail } from '@/features/report/types/ReportDomain';
import { Styles } from '@/types/styles';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { prisma } from '@/lib/prisma';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { Button } from '@/components/elements/button/Button';
import { useTodo } from '@/features/report/hooks/detail/useTodo';
import { useReportDetail } from '@/features/report/hooks/detail/useReportDetail';
import { Todo } from '@prisma/client';

type Props = {
  initReport: ReportDomainDetail;
};

const Detail = (props: Props) => {
  const { initReport } = props;
  const { handleBackRouter } = useCustomRouter();
  const { report, handleSetReport } = useReportDetail(initReport);
  const { setStartTime,setEndTime } = useTodo();
  if (!report) return <div>loading...</div>;

  // 既存のreportのtodoを更新(DBとstore)
  const handleSetReportTodo = async(id:number,updateTodo:(id:number)=>Promise<Todo|undefined>) => {
    const todo = await updateTodo(id);
    if (!todo) return;
    const newReport = {
      ...report,
      todos: report.todos.map((t) => (t.id === todo.id ? todo : t)),
    };
    handleSetReport(newReport);
  };

  const dateString = new Date(report.createdAt).toLocaleDateString();
  return (
    <>
      <Header />
      <Flex direction="column" style={styles.container} gap={20}>
        <Button onClick={handleBackRouter}>戻る</Button>
        {/* title */}
        <Flex direction="column" gap={3}>
          <Text style={styles.title}>{report.title}</Text>
          <Text style={styles.date}>{dateString}</Text>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text style={styles.subtitle}>メモ</Text>
          <Text style={styles.memo}>{report.memo}</Text>
        </Flex>
        <Flex direction="column" gap={2}>
          <Text style={styles.subtitle}>Todo</Text>
          <Flex direction="column" gap={30}>
            {report.todos.map((todo) => (
              <TodoRecord
                key={todo.id}
                {...todo}
                onClickStart={(id:number)=>handleSetReportTodo(id,setStartTime)}
                onClickEnd={(id:number)=>handleSetReportTodo(id,setEndTime)}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const styles: Styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: '71px 0 0 0 ',
    padding: '20px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '14px',
    color: '#808080',
  },
  memo: {
    fontSize: '16px',
  },
};

// ssrで取得
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;

  // idがない場合は404かリダイレクト
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  try {
    // reportと付随するTodoを取得
    const report = await prisma?.report.findUnique({
      where: {
        id: Number(params?.id),
      },
      include: {
        todos: true,
      },
    });
    const serializedReport = JSON.parse(
      JSON.stringify(report, (key, value: Date) =>
        key === 'createdAt' && value instanceof Date ? value.toISOString() : value,
      ),
    );
    return {
      props: {
        initReport: serializedReport,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

export default Detail;
