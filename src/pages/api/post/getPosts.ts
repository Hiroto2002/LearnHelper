import { Post } from '@/features/home/types/post';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;

  // return;
  try {
    const post = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
      include: {
        posts: {
          include: {
            techs: true,
          },
        },
      },
    });

    if (!post) {
      throw new Error(`User with ID ${userId} not found.`);
    }

    return res.status(200).json(post.posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default getPosts;
