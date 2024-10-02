import { Button, Divider, Flex,Image, Stack,Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { formatPrice } from '../utils/functions';


const CartDrawerItem = ({id,attributes:{thumbnail,title,price},quantity}) => {
    const dispatch = useDispatch()
  return (
    <>
      <Flex alignItems={"center"} mb={3} py={2}>
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${
            thumbnail.data.attributes.url
          }`}
          alt={title}
          w={"80px"}
          h={"80px"}
          mr={5}
          rounded="full"
          objectFit={"cover"}
        />

        <Stack>
          <Flex>
            <Text fontSize={"sm"}>{title}</Text>
            <Text fontSize={"sm"} ml={3}>Price : ${formatPrice(price)}</Text>
          </Flex>
          <Text fontSize={"sm"}>Quantity : {quantity}</Text>
          <Button variant="solid" colorScheme="red" size="xs" w="fit-content">
            Remove
          </Button>
        </Stack>
      </Flex>
      <Divider />
    </>
  );
}

export default CartDrawerItem;