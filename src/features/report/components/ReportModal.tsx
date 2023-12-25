import { SubmitButton } from '@/components/elements/button/SubmitButton';
import { Form } from '@/components/elements/form/Form';
import { TextInput } from '@/components/elements/input/TextInput';
import { Text } from '@/components/elements/text/Text';
import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React, { BaseSyntheticEvent } from 'react';
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { ReportInput } from '@/features/report/types/ReportDomain';
import { Flex } from '@/components/elements/box/Flex';
import { Button } from '@/components/elements/button/Button';
import { Styles } from '@/types/styles';

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
        <div style={styles.formContainer}>
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
            <div style={styles.todoContainer}>
              {fields.map((field, index) => (
                <Flex direction="column" key={field.id} gap={20}>
                  <Text>Todo {index + 1}</Text>
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
                  <Button onClick={() => remove(index)} style={styles.deleteButton}>
                    Delete
                  </Button>
                </Flex>
              ))}
            </div>

            <button type="button" onClick={() => append({ title: '', description: '' })}>
              追加
            </button>
            <SubmitButton>投稿</SubmitButton>
          </Form>
        </div>
      </ModalBody>
    </>
  );
};

const styles: Styles = {
  formContainer: {
    maxHeight: '80vh',
    overflowY: 'scroll',
  },
  todoContainer: {
    margin: '20px 0',
  },
  deleteButton: {
    width: '100px',
    height: '30px',
    backgroundColor: '#cc4433',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    margin: '20px auto',
  },
};
