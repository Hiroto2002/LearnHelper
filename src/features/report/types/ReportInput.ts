import { Report, Todo } from '@prisma/client';

export type ReportInput = Pick<Report, 'title' | 'memo'> & {
  todos: Pick<Todo, 'title' | 'description'>[];
};
