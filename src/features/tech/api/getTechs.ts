import { prisma } from '@/lib/prisma';
import { TechColumn } from '@/types/tech';

const getTechs = async (userId: number):Promise<TechColumn[]> => {
  const tech = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      techs: true,
    },
  });

  const serializedData:{techs:Promise<TechColumn[]>} = JSON.parse(
    JSON.stringify(tech, (key, value: Promise<TechColumn>) => {
      if (key === 'createdAt' && value instanceof Date) {
        return value.toISOString();             
      }
      return value;
    }),
  );

  return serializedData.techs;
};

export default getTechs;
