import { useState } from 'react';
import { ReportDomain } from '../types/ReportDomain';
import axios from 'axios';

export const useReport = () => {
  const [report, setReport] = useState<ReportDomain[]>();


  const fetchAllReport = async () => {
    await axios.get<ReportDomain[]>('/api/reports/').then((res) => {
        console.log("--------------------");
        console.log(res.data);
      setReport(res.data);
    });
  };

  return { report, fetchAllReport };
};
