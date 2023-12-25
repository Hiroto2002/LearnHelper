import { Header } from '@/components/layouts/header/Header';
import { useReport } from '@/features/report/hooks/useReport';
import { Styles } from '@/types/styles';
import React, { useEffect,useState } from 'react';
import * as Report from '@/features/report/components';
import { useModal } from '@/hooks/useModal';
import { set, useFieldArray, useForm } from 'react-hook-form';
import { ReportInput } from '@/features/report/types/ReportDomain';
import { Flex } from '@/components/elements/box/Flex';

const report = () => {
  const { report, fetchAllReport, createReport,deleteReport } = useReport();
  const { isOpen, handleOpen, handleClose, } = useModal();
  const {
    isOpen: isEditOpen,
    handleOpen: handleEditOpen,
    handleClose: handleEditClose,
  } = useModal();
  const { register, control, handleSubmit } = useForm<ReportInput>();
  const { fields, append, remove } = useFieldArray({ control, name: 'todos' });
  const [currentEditId, setCurrentEditId] = useState<number|null>(null);

  const handleEditClick = (id:number) => {
    handleEditOpen();
    setCurrentEditId(id);
  }

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
      <Flex style={styles.container} gap={30} direction='column' >
        {report.map((report) => (
          <Report.Record key={report.id} data={report} handleEditClick={()=>handleEditClick(report.id)}/>
          ))}
      </Flex>
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

      {isEditOpen && <Report.EditModal handleClose={handleEditClose} handleDelete={()=>deleteReport(currentEditId!)} />}
      
    </>
  );
};

const styles: Styles = {
  container: {
    width: '100vw',
    margin: '100px 0 0 0 ',
    background:"#eee",
    padding: '20px',
  },
};

export default report;
