import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const fetchAllReport = async (req: NextApiRequest, res: NextApiResponse) => {
  // todo: ユーザーIDを取得する
  const userId = 1;
  try {
    const post = await prisma.report.findMany({
        where: {
            authorId: userId,
        }
    });
   
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default fetchAllReport;
