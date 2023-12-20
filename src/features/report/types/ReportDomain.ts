import { Report } from "@prisma/client";

export type ReportDomain = Pick<Report,"id"|"title"|"createdAt">