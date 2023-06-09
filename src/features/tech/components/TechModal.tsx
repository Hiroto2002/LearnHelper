import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { RadioInput } from '@/components/elements/input/RadioInput';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TechInput } from '../types/tech';
import { Text } from '@/components/elements/text/Text';
import { Priorities } from '@/components/layouts/postModal/Priorities';

type Props = {
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<TechInput>;
  errors: FieldErrors<TechInput>;
};

export const TechModal = (props: Props) => {
  const { handleClose, onSubmit, register, errors } = props;
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
          <TextInput
            placeholder="なぜ必要か"
            {...register('whyWant', {
              required: '必要な理由は必須です',
            })}
          />
          {errors &&
            Object.values(errors).map((value, index) => <Text key={index}>{value.message}</Text>)}
          <SubmitButton>投稿</SubmitButton>
        </Form>
      </ModalBody>
    </>
  );
};
