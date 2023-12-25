import { useState } from 'react';
import { ReportDomain, ReportInput } from '@/features/report/types/ReportDomain';
import axios from 'axios';
import { Report } from '@prisma/client';

export const useReport = () => {
  const [report, setReport] = useState<ReportDomain[]>();

  /**
   * 全てのレポートを取得する
   * @returns
   *  */
  const fetchAllReport = async () => {
    await axios.get<ReportDomain[]>('/api/reports/').then((res) => {
      setReport(res.data);
    });
  };

  /**
   * レポートを作成する
   * @param params
   * @returns
   */
  const createReport = async (params: ReportInput) => {
    await axios.post<ReportDomain>('/api/reports/', params).then((res) => {
      setReport((prev) => {
        if (prev) {
          return [...prev, res.data];
        }
        return [res.data];
      });
    });
  };

  return { report, fetchAllReport, createReport };
};
