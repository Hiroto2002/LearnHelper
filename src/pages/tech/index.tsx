import { BottomNav } from '@/components/layouts/bottomNav/BottomNav';
import { useSaveTech } from '@/features/tech/hooks/useSaveTech';
import { TechInput } from '@/features/tech/types/tech';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useModal } from '@/hooks/useModal';
import { Styles } from '@/types/styles';
import { NextPage } from 'next';
import React, { useEffect} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Tech from '../../features/tech/components/index';

const Home: NextPage = () => {
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

  useEffect(() => {
    console.log(errors);
  }, );

  return (
    <div style={styles.container}>
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
export default Home;
