import { BottomNav } from '@/components/layouts/bottomNav/BottomNav';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import React from 'react';
import * as Post from '../../features/home/components/index';

const home = () => {
  const { handlePushRouter, isActive } = useCustomRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  return (
    <div style={styles.container}>
      {/* <Post.PostList></Post.PostList> */}
      <Post.PostButton handleOpen={handleOpen} />
      <BottomNav handlePushRouter={handlePushRouter} isActive={isActive} />
      {isOpen && <Post.PostModal handleClose={handleClose}></Post.PostModal>}
    </div>
  );
};

const styles: Styles = {
  container: {
    height: '100vh',
    width: '100vw',
  },
};
export default home;
