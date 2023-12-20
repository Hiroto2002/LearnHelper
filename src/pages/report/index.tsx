import { Header } from '@/components/layouts/header/Header';
import { useReport } from '@/features/report/hooks/useReport';
import { Styles } from '@/types/styles';
import React, { use, useEffect } from 'react';

const report = () => {
  const { report,fetchAllReport } = useReport();

  useEffect(() => {
    console.log("-----------");
   
    fetchAllReport();
  }, []);

  useEffect(() => {
    console.log("-----------");
    
    console.log(report);
  });

  return (
    <>
      <Header />
      <div style={styles.container}>{}</div>
    </>
  );
};

const styles: Styles = {
  container: {
    width: '100vw',
  },
};

export default report;
