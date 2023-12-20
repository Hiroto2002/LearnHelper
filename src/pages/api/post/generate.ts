import { Post } from '@/features/home/types/post';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, content, getContent, priority, authorId, needContent, techs } = req.body as Post;


    // authorIdの検証
    if (typeof authorId !== 'string') {
      return res.status(400).json({ message: 'Invalid authorId value' });
    }



    const post = await prisma.post.create({
      data: {
        title,
        content,
        getContent,
        priority: priority,
        author: { connect: { id: authorId } },
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
