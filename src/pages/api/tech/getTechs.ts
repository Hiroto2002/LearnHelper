import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getTechs = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query as { userId: string };

  // return;
  try {
    const post = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
      include: {
        techs: true,
      },
    });

    return res.status(200).json(post.techs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default getTechs;
