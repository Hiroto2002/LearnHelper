import { ModalBody } from '@/components/layouts/modal/ModalBody';
import { Overlay } from '@/components/layouts/modal/Overlay';
import React from 'react';

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
