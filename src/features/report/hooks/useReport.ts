import { useState } from 'react';
import { ReportCreate, ReportDomain } from '../types/ReportDomain';
import axios from 'axios';

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
  const createReport = async (params: ReportCreate) => {
    await axios.post<ReportCreate>('/api/reports/', params).then((res) => {
      setReport((prev) => {
        if (prev) {
          return [...prev, res.data];
        }
        return [res.data];
      });
    });
  };

  return { report, fetchAllReport };
};
