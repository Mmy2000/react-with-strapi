"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  FormHelperText
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";


export default function Login() {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [user, setUser] = useState({
    email:'',
    password:''
  });
  const [showPassword, setShowPassword] = useState(false);
  const onChangeHandler = e =>{
    const {name,value} = e.target
    setUser({...user , [name]:value})
  }
  const submitHandler = e =>{
    e.preventDefault()
    if (!user.email) {
      setIsEmail(true)
      if (!user.password) {
        setIsPassword(true)
      }
      return;
    }
    setIsEmail(false)
    setIsPassword(false)
    console.log(user);
    
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          as={"form"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={submitHandler}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                isInvalid={isEmail}
                errorBorderColor="crimson"
                value={user.email}
                name="email"
                onChange={onChangeHandler}
              />
              {isEmail ? (
                <FormHelperText color={"red.500"}>
                  Email is Required
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={onChangeHandler}
                  value={user.password}
                  isInvalid={isPassword}
                  errorBorderColor="crimson"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />

                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {isPassword ? (
                <FormHelperText color={"red.500"}>
                  Password is Required
                </FormHelperText>
              ) : null}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={isEmail || isPassword ? "red.500" : "blue.400"}
                color={"white"}
                _hover={{
                  bg: isEmail || isPassword ? "red.300" : "blue.300",
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
