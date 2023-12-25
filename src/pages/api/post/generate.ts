import { Post } from '@/features/home/types/post';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, content, getContent, priority, userId, needContent, techs } = req.body as Post;


    // userIdの検証
    if (typeof userId !== 'string') {
      return res.status(400).json({ message: 'Invalid userId value' });
    }



    const post = await prisma.post.create({
      data: {
        title,
        content,
        getContent,
        priority: priority,
        user: { connect: { id: userId } },
        techs: { connect: techs.map((tech) => ({ id: tech })) },
        needContent: { create: [{ title: needContent }] },
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default createPost;
