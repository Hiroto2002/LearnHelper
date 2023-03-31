import { BottomNav } from '@/components/layouts/bottomNav/BottomNav';
import { PostInput } from '@/features/home/types/PostInput';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { NextPage } from 'next';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Post from '../../features/home/components/index';

const Home: NextPage = () => {
  const { handlePushRouter, isActive } = useCustomRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInput>({
    // mode:初回のバリデーションを行うタイミング
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<PostInput> = async(data) => {
    console.log(data);
    await reset();
  };

  return (
    <div style={styles.container}>
      <Post.PostToggleButton handleOpen={handleOpen} />
      <BottomNav handlePushRouter={handlePushRouter} isActive={isActive} />
      {isOpen && (
        <Post.PostModal
          handleClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
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
export default Home;
