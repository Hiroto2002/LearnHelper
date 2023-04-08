import { Post, Prisma, PrismaClient } from '@prisma/client';

// declare: globalに変数を追加する
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

function getLogLevel(): (Prisma.LogLevel | Prisma.LogDefinition)[] {
  if (process.env.NODE_ENV === 'test') {
    return [];
  }

  if (process.env.NODE_ENV === 'production') {
    return ['info', 'warn', 'error'];
  }

  return ['query', 'info', 'warn', 'error'];
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: getLogLevel(),
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// グローバル変数を使用して、
// アプリケーション全体で同じPrismaClientインスタンスを共有することを推奨します。
// グローバル変数を使用して、アプリケーション全体で同じPrismaClientインスタンスを共有するようにしましょう。
