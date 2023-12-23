import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { TextInput } from '@/components/elements/input/TextInput';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { ReportInput } from '@/features/report/types/ReportInput';

type Props = {
  handleClose: () => void;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  register: UseFormRegister<ReportInput>;
  fields: FieldArrayWithId<ReportInput, 'todos', 'id'>[];
  append: UseFieldArrayAppend<ReportInput, 'todos'>;
  remove: UseFieldArrayRemove;
};

export const ReportModal = (props: Props) => {
  const { fields, append, remove, handleClose, onSubmit, register } = props;
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

          <TextInput
            placeholder="メモ"
            {...register('memo', {
              required: 'メモは必須です',
            })}
          />
          {fields.map((field, index) => (
            <div key={field.id}>
              <TextInput
                placeholder="タイトル"
                {...register(`todos.${index}.title`, {
                  required: 'タイトルは必須です',
                })}
              />
              <TextInput
                placeholder="説明"
                {...register(`todos.${index}.description`, {
                  required: '説明は必須です',
                })}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          ))}

          <button type="button" onClick={() => append({ title: '', description: '' })}>
            追加
          </button>
          <SubmitButton>投稿</SubmitButton>
        </Form>
      </ModalBody>
    </>
  );
};
