import { TechColumn } from './tech';

export type PostColumn = {
  id: number;
  title: string;
  priority: number;
  content: string;
  getContent: string;
  createdAt: string;
  userId: number;
  techs: TechColumn[];
  needContent: string[];
};
