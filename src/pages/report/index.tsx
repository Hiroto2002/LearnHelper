import { Header } from '@/components/layouts/header/Header';
import { useReport } from '@/features/report/hooks/useReport';
import { Styles } from '@/types/styles';
import React, { useEffect } from 'react';
import * as Report from '@/features/report/components';
import { useModal } from '@/hooks/useModal';
import { useFieldArray, useForm } from 'react-hook-form';
import { ReportInput } from '@/features/report/types/ReportDomain';

const report = () => {
  const { report, fetchAllReport, createReport } = useReport();
  const { isOpen, handleOpen, handleClose } = useModal();
  const { register, control, handleSubmit } = useForm<ReportInput>();
  const { fields, append, remove } = useFieldArray({ control, name: 'todos' });

  const onSubmit = (inputData: ReportInput) => {
    const data = {
      ...inputData,

      todos: inputData.todos.map((todo) => ({
        ...todo,
        isDone: false,
      })),
    };
    try {
      createReport(data);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

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
      {isOpen && (
        <Report.ReportModal
          register={register}
          handleClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
          fields={fields}
          append={append}
          remove={remove}
        />
      )}
      <Report.PostToggleButton handleOpen={handleOpen} />
    </>
  );
};

const styles: Styles = {
  container: {
    width: '100vw',
  },
};

export default report;
