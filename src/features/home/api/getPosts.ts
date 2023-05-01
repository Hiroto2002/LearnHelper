import { PostColumn } from "@/types/post";
import { prisma } from "@/lib/prisma";

export const getPosts = async (userId: number):Promise<PostColumn[]> => {
  const post:{posts:Promise<PostColumn[]>}  = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      posts: {
        include: {
          techs: true,
          needContent: true,
        },
      },
    },
  });
  const serializedData:{posts:Promise<PostColumn[]>} = JSON.parse(JSON.stringify(post, (key, value: Promise<PostColumn> ) =>
    key === "createdAt" && value instanceof Date ? value.toISOString() : value
  ));
  
  return serializedData.posts;
};
