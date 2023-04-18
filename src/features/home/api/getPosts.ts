import { PostColumn } from "@/types/post";

export const getPosts = async (userId: number):Promise<PostColumn> => {
  const post = await prisma.user.findUnique({
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
  const serializedData = JSON.parse(JSON.stringify(post, (key, value) =>
    key === "createdAt" && value instanceof Date ? value.toISOString() : value
  ));
  return serializedData.posts;
};
