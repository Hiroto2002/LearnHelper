import { Header } from '@/components/layouts/header/Header';
import { useSaveTech } from '@/features/tech/hooks/useSaveTech';
import { TechInput } from '@/features/tech/types/tech';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Tech from '../../features/tech/components/index';
import { fetcher } from 'utils/fetcher';
import querystring from 'querystring';
import { TechColumn } from '@/types/tech';
import useSWR from 'swr';
import getTechs from '@/features/tech/api/getTechs';

type Props = {
  initialData: TechColumn[];
};

const TechPage = ({ initialData }: Props) => {
  const { handlePushRouter, isActive } = useCustomRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TechInput>({
    // mode:初回のバリデーションを行うタイミング
    mode: 'onSubmit',
  });
  const { save } = useSaveTech();
  const onSubmit: SubmitHandler<TechInput> = async (data) => {
    const techData = { ...data, authorId: 1 };
    await save(techData);
    reset();
  };

  return (
    <div style={styles.container}>
      <Tech.TechList data={initialData} />
      <Tech.TechToggleButton handleOpen={handleOpen} />
      <Header handlePushRouter={handlePushRouter} isActive={isActive} />
      {isOpen && (
        <Tech.TechModal
          handleClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      )}
    </div>
  );
};

const styles: Styles = {
  container: {
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    
  },
};

export const getServerSideProps: GetServerSideProps = async () => {
  const userId = 1;
  const data = await getTechs(userId);

  return {
    props: {
      initialData: data, // 初期値を返す
    },
  };
};

export default TechPage;
