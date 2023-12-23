import { Report, Todo } from "@prisma/client";

export type ReportDomain = Pick<Report,"id"|"title"|"createdAt">

export type ReportDomainDetail = Report & {todos:Todo[]}