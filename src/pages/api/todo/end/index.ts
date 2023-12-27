import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, now } = req.body;

  try {
    const todo = await prisma.todo.update({
      data: {
        endDate: now,
        isEnd: true,
      },
      where: {
        id: id,
      },
    });
    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;