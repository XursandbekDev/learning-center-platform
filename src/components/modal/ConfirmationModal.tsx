import React from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

type ConfirmationModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <button onClick={onRequestClose} className="absolute top-3 right-3">
          <FiX className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Haqiqatan ham tizimdan chiqmoqchimisiz?</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Ha
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Yo'q
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
