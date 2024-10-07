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
  variant="solid",
}) {
  const cancelRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen}>Discard</Button>
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
            <Button variant={variant} colorScheme="red" ml={3}>
              {okText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CustomeAlertDailog;
