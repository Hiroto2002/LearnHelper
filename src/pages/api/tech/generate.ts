import { Tech } from '@/features/tech/types/tech';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const createTech = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, priority, authorId,whyWant } = req.body as Tech;
  // const { id } = req.user;
  // return;
  try {
    const post = await prisma.tech.create({
      data: {
        title: title,
        priority: Number(priority),
        // userとの関係を作成する
        author: {
          connect: {
            id: authorId,
          },
        },
        whyWant: whyWant,
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default createTech;
