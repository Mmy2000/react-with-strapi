import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter

} from "@chakra-ui/react";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  cancelTxt = "cancel",
  okTxt = "Update",
  children,
  onOkClick,
  isLoading
}) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              {cancelTxt}
            </Button>
            <Button colorScheme="blue" onClick={onOkClick} isLoading={isLoading}>
              {okTxt}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal