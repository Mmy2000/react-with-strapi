import React, { useRef } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { onCloseCartDrawerAction, onOpenCartDrawerAction, selectGlobal } from "../app/features/globalSlice";

const CartDrawer = () => {
    const btnRef = useRef()
    const { isOpenCartDrawer, onCloseCartDrawer, onOpenCartDrawer } =
      useSelector(selectGlobal);
      const dispatch = useDispatch()
      const onClose = ()=>{
        dispatch(onCloseCartDrawerAction())
      }
      
  return (
    <Drawer
      isOpen={isOpenCartDrawer}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="red" mr={3} onClick={() => {}}>
            Clear All
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
