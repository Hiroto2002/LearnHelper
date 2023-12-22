import { Header } from '@/components/layouts/header/Header';
import { useReport } from '@/features/report/hooks/useReport';
import { Styles } from '@/types/styles';
import React, {  useEffect } from 'react';
import * as Report from '@/features/report/components';

const report = () => {
  const { report,fetchAllReport } = useReport();

  useEffect(() => { 
    fetchAllReport();
  }, []);

  
  if (!report) return <div>loading...</div>;
  return (
    <>
      <Header />
      <div style={styles.container}>
        <Report.RecordList data={report} />
      </div>
    </>
  );
};

const styles: Styles = {
  container: {
    width: '100vw',
  },
};

export default report;
