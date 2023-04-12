import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { CheckBoxInput } from '@/components/elements/input/CheckBoxInput';
import { RadioInput } from '@/components/elements/input/RadioInput';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { PostInput } from '../types/post';
import { Text } from '@/components/elements/text/Text';
type Props = {
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<PostInput>;
  errors: FieldErrors<PostInput>;
};
export const PostModal = (props: Props) => {
  const { handleClose, onSubmit, register, errors } = props;
  return (
    <>
      <Overlay onClick={handleClose} />
      <ModalBody>
        <Form onSubmit={onSubmit}>
          <TextInput
            label="タイトル"
            {...register('title', {
              required: 'タイトルは必須です',
            })}
          />
          <RadioInput
            {...register('priority', {
              required: '優先度は必須です',
            })}
            value="1"
          >
            1
          </RadioInput>
          <RadioInput
            {...register('priority', {
              required: '優先度は必須です',
            })}
          >
            2
          </RadioInput>
          <CheckBoxInput
            {...register('techs', {
              required: '使用技術は必須です',
            })}
            value="1"
          >
            1
          </CheckBoxInput>
          {/* <CheckBoxInput
            {...register('techs', {
              required: 'タイトルは必須です',
            })}
            value="3"
          >
            3
          </CheckBoxInput> */}
          <TextInput
            label="概要"
            {...register('content', {
              required: '概要は必須です',
            })}
          />
          <TextInput
            label="得るもの"
            {...register('getContent', {
              required: '得るものは必須です',
            })}
          />
          <TextInput label="必要なもの" {...register('needContent')} />
          {errors &&
            Object.values(errors).map((value, index) => <Text key={index}>{value.message}</Text>)}
          <SubmitButton>投稿</SubmitButton>
        </Form>
      </ModalBody>
    </>
  );
};
