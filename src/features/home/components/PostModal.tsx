import { Form } from '@/components/elements/form/Form';
import { RadioInput } from '@/components/elements/input/RadioInput';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React from 'react';

type Props = {
  handleClose: () => void;
};
export const PostModal = (props: Props) => {
  const { handleClose } = props;
  return (
    <>
      <Overlay onClick={handleClose} />
      <ModalBody>
        <TextInput label="タイトル" />
        <Form label='優先度'>
          <RadioInput >1</RadioInput>
        </Form>
        <Form label='技術'>
          <RadioInput >1</RadioInput>
        </Form>
        <TextInput label="概要" />
        <TextInput label="得るもの" />
        <TextInput label="必要なもの" />
      </ModalBody>
    </>
  );
};
