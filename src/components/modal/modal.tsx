import { modalStyle } from 'components/modal/modal.style';
import { ReactNode } from 'react';
import ReactModal from 'react-modal';

type TModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode | JSX.Element;
};

export const Modal = ({
  isOpen,
  onClose,
  children
}: TModalProps): JSX.Element => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      style={modalStyle}>
      {children}
    </ReactModal>
  );
};
