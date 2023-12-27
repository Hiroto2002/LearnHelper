import { useState } from 'react';
import axios from 'axios';
import { Report } from '@prisma/client';
import { ReportDomainDetail } from '../../types/ReportDomain';
import { useCustomRouter } from '@/hooks/useCustomRouter';

export const useReportDetail = (initReport?: ReportDomainDetail) => {
  const [report, setReport] = useState<ReportDomainDetail | undefined>(initReport);
  const { handlePushRouter } = useCustomRouter();

  const handleSetReport = (report: ReportDomainDetail) => {
    setReport(report);
  };

  /**
   * レポートを更新する
   * @param params
   * @returns
   */
  const updateReport = async (params: Report) => {
    await axios.put<ReportDomainDetail>('/api/reports/', params).then((res) => {
      setReport(res.data);
    });
  };

  /**
   * レポートを削除する
   * @param params
   * @returns
   */
  const deleteReport = async (id: number) => {
    await axios.delete('/api/reports/', { data: { id: id } }).then((res) => {
      handlePushRouter('/report');
    });
  };

  return { report, handleSetReport, updateReport, deleteReport };
};
