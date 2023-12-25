import { ReportInput } from '@/features/report/types/ReportDomain';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // todo: ユーザーIDを取得する
  const userId = 1;

  switch (req.method) {
    case 'GET':
      try {
        const post = await prisma.report.findMany({
          where: {
            userId: userId,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });

        return res.status(200).json(post);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

    case 'POST':
      try {
        const { title, memo, todos } = req.body as ReportInput;

        const result = await prisma.$transaction(async (prisma) => {
          const report = await prisma.report.create({
            data: {
              title: title,
              memo: memo,
              userId: userId,
            },
          });

          const todo = await prisma.todo.createMany({
            data: todos.map((todo) => ({
              title: todo.title,
              description: todo.description,
              isEnd: false,
              reportId: report.id,
            })),
          });

          return { report, todo };
        });
        console.log(result);
        res
          .status(200)
          .json({
            id: result.report.id,
            title: result.report.title,
            createdAt: result.report.createdAt,
          });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
  }
};
export default handler;
