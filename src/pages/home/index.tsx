import { BottomNav } from '@/components/layouts/bottomNav/BottomNav';
import { useSavePost } from '@/features/home/hooks/useSavePost';
import { PostInput } from '@/features/home/types/post';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Post from '../../features/home/components/index';
import { fetcher } from 'utils/fetcher';
// import { UserColumn } from '@/types/user';
import { SWRConfig } from 'swr';
import querystring from 'querystring';
import useSWR from 'swr';
import { PostColumn } from '@/types/post';

const Home:NextPage = () => {
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
  const { save } = useSavePost();
  const onSubmit: SubmitHandler<PostInput> = async (data) => {
    const postData = { ...data, authorId: 1 };
    // console.log(postData);
    await save(postData);
    reset();
  };

  const { data } = useSWR<PostColumn[]>(`/api/post/getPosts?userId=1`, fetcher) ;
  
  if(!data) return <div>loading...</div>

  return (
    <div style={styles.container}>
      <Post.PostList data={data!} />
      <Post.PostToggleButton handleOpen={handleOpen} />
      <BottomNav handlePushRouter={handlePushRouter} isActive={isActive} />
      {isOpen && (
        <Post.PostModal
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

export default Home;
