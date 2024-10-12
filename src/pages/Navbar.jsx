import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import CookieService from "./CookieService";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../app/features/cartSlice";
import { onOpenCartDrawerAction } from "../app/features/globalSlice";


export default function Navbar() {
  const {cartProducts} = useSelector(selectCart)
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const token = CookieService.get('jwt')
  const logout = ()=>{
    CookieService.delete('jwt')
    window.location.reload()
  }
  const dispatch = useDispatch();
  const textColor = useColorModeValue("black", "white");
  const onOpen = () => {
    dispatch(onOpenCartDrawerAction());
  };

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className=" mx-auto px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-8">
          <div className={`text-3xl font-bold`} style={{ color: textColor }}>
            My App
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `font-bold`
                  : `  bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all py-2 px-4 rounded-md`
              }
              style={{ color: textColor }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? `font-bold`
                  : `hover:text-blue-600 transition duration-300 `
              }
              style={{ color: textColor }}
            >
              Products
            </NavLink>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-center ">
          <div
            className=" mr-4 flex items-center px-4 py-2 bg-gradient-to-r to-blue-200 from-blue-300 cursor-pointer text-white font-bold rounded-lg shadow-lg hover:to-blue-300 hover:from-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            onClick={onOpen}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 2m6.4-2v6m0 0h-4m4 0h4"
              />
            </svg>
            <span className=" px-2 py-1 bg-red-500 text-xs font-bold text-white rounded-full">
              {cartProducts.length}
            </span>
          </div>

          <div className="hidden md:block">
            {!token ? (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 shadow-lg"
                    : "bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
                }
              >
                Login
              </NavLink>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </div>
          <Button className="ml-4" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
          </Button>
        </div>
      </div>
    </Box>
  );
}

// "use client";

// import {
//   Box,
//   Flex,
//   Avatar,
//   Text,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   HStack,
//   Link
// } from "@chakra-ui/react";
// import {Link as RouterLink} from 'react-router-dom'
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// const Links = ["Products", "About", "Contact"];
// const NavLink = ({ children }) => {
//   return (
//     <Link
//       as={RouterLink}
//       px={2}
//       py={1}
//       rounded={"md"}
//       _hover={{
//         textDecoration: "none",
//         bg: useColorModeValue("gray.200", "gray.700"),
//       }}
//       to={children.toLowerCase()}
//     >
//       {children}
//     </Link>
//   );
// };

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <Box>Logo</Box>
//           <HStack spacing={8} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>

//           <Flex alignItems={"center"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//               <Stack
//                 flex={{ base: 1, md: 0 }}
//                 justify={"flex-end"}
//                 direction={"row"}
//                 spacing={6}
//               >
//                 <NavLink to="/login">Login</NavLink>
//                 <NavLink to="/regsiter">Register</NavLink>
//               </Stack>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={"full"}
//                   variant={"link"}
//                   cursor={"pointer"}
//                   minW={0}
//                 >
//                   <Avatar
//                     size={"sm"}
//                     src={"https://avatars.dicebear.com/api/male/username.svg"}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={"center"}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={"2xl"}
//                       src={"https://avatars.dicebear.com/api/male/username.svg"}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
