import { Prisma, PrismaClient } from '@prisma/client';

/* @typescript-eslint/no-unsafe-assignment: 0 */
/* @typescript-eslint/no-unsafe-member-access: 0 */
/* @typescript-eslint/no-unsafe-call: 0 */

// declare: globalに変数を追加する
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  var prisma: any;
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
