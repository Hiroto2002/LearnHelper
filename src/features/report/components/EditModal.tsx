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
import { Button } from '@/components/elements/button/Button';

type Props = {
  handleDelete: () => void;
  handleClose: () => void;
};

export const EditModal = (props: Props) => {
  const { handleClose,handleDelete } = props;
  return (
    <>
      <Overlay onClick={handleClose} />
      <ModalBody>
      <Button onClick={handleDelete}>削除</Button>
      </ModalBody>
    </>
  );
};
