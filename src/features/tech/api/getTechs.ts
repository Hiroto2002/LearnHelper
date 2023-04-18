import { prisma } from '@/lib/prisma';

const getTechs = async (userId: number) => {
  const tech = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      techs: true,
    },
  });

  const serializedData = JSON.parse(
    JSON.stringify(tech, (key, value) => {
      if (key === 'createdAt' && value instanceof Date) {
        return value.toISOString();
      }
      return value;
    }),
  );

  return serializedData.techs;
};

export default getTechs;
