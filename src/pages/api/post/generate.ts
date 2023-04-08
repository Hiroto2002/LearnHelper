import { prisma } from '@/lib/prisma';
import { Post } from '@/lib/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, getContent, priority, authorId } = req.body as Post;
  const {needContent,techs} = req.body ;
  // const { id } = req.user;
  // return;
  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        getContent: getContent,
        priority: Number(priority),
        // userとの関係を作成する
        author: {
          connect: {
            id: authorId,
          },
        },
        // 多対多の関係を作成する
        techs: {
          connect: techs.map((techId:Post) => ({ id: Number(techId) })),
        },
        // 一緒に作成する
        needContent: {
          create: [{ title: needContent }],
        },
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default createPost;
