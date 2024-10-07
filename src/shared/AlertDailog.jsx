import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
function CustomeAlertDailog({
  isOpen,
  onOpen,
  onClose,
  title,
  description,
  cancelText = "Cancel",
  okText = "Ok",
  variant = "solid",
  onOkHandler,
  isLoading
}) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{description}</AlertDialogBody>
          <AlertDialogFooter>
            <Button variant={variant} ref={cancelRef} onClick={onClose}>
              {cancelText}
            </Button>
            <Button
              onClick={onOkHandler}
              variant={variant}
              colorScheme="red"
              ml={3}
              isLoading={isLoading}
            >
              {okText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CustomeAlertDailog;
