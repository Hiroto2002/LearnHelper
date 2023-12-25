import { Report, Todo } from "@prisma/client";

export type ReportDomain = Pick<Report,"id"|"title"|"createdAt">

export type ReportDomainDetail = Report & {todos:Todo[]}

export type ReportInput = Pick<Report, 'title' | 'memo'> & {
    todos: Pick<Todo, 'title' | 'description'>[];
  };