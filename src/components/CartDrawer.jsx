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
  Text
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  onCloseCartDrawerAction,
  onOpenCartDrawerAction,
  selectGlobal,
} from "../app/features/globalSlice";
import CartDrawerItem from "./CartDrawerItem";
import { selectCart , clearCart } from "../app/features/cartSlice";
const CartDrawer = () => {
  const btnRef = useRef();
  const { isOpenCartDrawer } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(selectCart);

  const onClose = () => {
    dispatch(onCloseCartDrawerAction());
  };

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

        <DrawerBody>
          {cartProducts.length? cartProducts.map((item) => (
            <CartDrawerItem key={item.id} {...item} />
          )):(<Text fontSize={"lg"}>Your Cart Is Empty</Text>)}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="red" mr={3} onClick={() => dispatch(clearCart())}>
            Clear All
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
