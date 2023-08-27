import ReactModal from 'react-modal';
ReactModal.setAppElement('#app');
const ModalPayment = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default ModalPayment;