import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { CheckBoxInput } from '@/components/elements/input/CheckBoxInput';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { PostInput } from '../types/post';
import { Text } from '@/components/elements/text/Text';
import { Priorities } from '@/components/layouts/postModal/Priorities';
import { TechColumn } from '@/types/tech';
import { TechList } from './TechList';

type Props = {
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<PostInput>;
  errors: FieldErrors<PostInput>;
  techData: TechColumn[];
};

export const PostModal = (props: Props) => {
  const { handleClose, onSubmit, register, errors, techData } = props;
  return (
    <>
      <Overlay onClick={handleClose} />
      <ModalBody>
        <Form onSubmit={onSubmit}>
          <TextInput
            placeholder="タイトル"
            {...register('title', {
              required: 'タイトルは必須です',
            })}
          />

          <Priorities register={register} />

          <TechList techData={techData} register={register}/>

          <TextInput
            placeholder="概要"
            {...register('content', {
              required: '概要は必須です',
            })}
          />
          <TextInput
            placeholder="得るもの"
            {...register('getContent', {
              required: '得るものは必須です',
            })}
          />
          <TextInput placeholder="必要なもの" {...register('needContent')} />
          {errors &&
            Object.values(errors).map((value, index) => <Text key={index}>{value.message}</Text>)}
          <SubmitButton>投稿</SubmitButton>
        </Form>
      </ModalBody>
    </>
  );
};
