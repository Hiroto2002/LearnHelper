import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { CheckBoxInput } from '@/components/elements/input/CheckBoxInput';
import { RadioInput } from '@/components/elements/input/RadioInput';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { PostInput } from '../types/PostInput';

type Props = {
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<PostInput>;
};
export const PostModal = (props: Props) => {
  const { handleClose, onSubmit, register } = props;
  return (
    <>
      <Overlay onClick={handleClose} />
      <ModalBody>
        <Form onSubmit={onSubmit}>
          <TextInput label="タイトル" {...register('title')} />
          <RadioInput {...register('priority')} value="1">
            1
          </RadioInput>
          <RadioInput {...register('priority')}>2</RadioInput>
          <CheckBoxInput {...register('tech')} value="2">
            2
          </CheckBoxInput>
          <CheckBoxInput {...register('tech')} value="3">
            3
          </CheckBoxInput>
          <TextInput label="概要" {...register('content')} />
          <TextInput label="得るもの" {...register('getContent')} />
          <TextInput label="必要なもの" {...register('needContent')} />
          <SubmitButton>投稿</SubmitButton>
        </Form>
      </ModalBody>
    </>
  );
};
