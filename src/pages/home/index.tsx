import { Header } from '@/components/layouts/header/Header';
import { useSavePost } from '@/features/home/hooks/useSavePost';
import { PostInput } from '@/features/home/types/post';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Post from '../../features/home/components/index';
import { PostColumn } from '@/types/post';
import { getPosts } from '@/features/home/api/getPosts';
import { TechColumn } from '@/types/tech';
import getTechs from '@/features/tech/api/getTechs';

type Props = {
  initialData: PostColumn[];
  techData: TechColumn[];
};

const Home = ({ initialData,techData }: Props) => {
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
  

  return (
    <div style={styles.container}>
      <Post.PostList data={initialData} />
      <Post.PostToggleButton handleOpen={handleOpen} />
      <Header />
      {isOpen && (
        <Post.PostModal
          handleClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          techData={techData}
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
  const data = await getPosts(userId);
  const techData = await getTechs(userId);
  return {
    props: {
      initialData: data, // 初期値を返す
      techData: techData,
    },
  };
};

export default Home;
