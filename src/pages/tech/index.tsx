import { BottomNav } from '@/components/layouts/bottomNav/BottomNav';
import { useSaveTech } from '@/features/tech/hooks/useSaveTech';
import { TechInput } from '@/features/tech/types/tech';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Tech from '../../features/tech/components/index';
import { fetcher } from 'utils/fetcher';
import querystring from 'querystring';
import { TechColumn } from '@/types/tech';

type Props={
  initialData: TechColumn[]
}
const TechPage = ({initialData}:Props) => {
  useEffect(()=>{
    console.log(initialData);
  },[])
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
      <Tech.TechList data={initialData}/>
      <Tech.TechToggleButton handleOpen={handleOpen} />
      <BottomNav handlePushRouter={handlePushRouter} isActive={isActive} />
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
  },
};

export const getServerSideProps: GetServerSideProps = async () => {
  const userId = '1';
  const query = querystring.stringify({ userId: userId?.toString() });
  const data = await fetcher<TechColumn[]>(`${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/tech/getTechs?${query}`);
  
  return {
    props: {
      initialData: data, // 初期値を返す
    },
  };
};

export default TechPage;
