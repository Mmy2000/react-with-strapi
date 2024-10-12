import { useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsWifiOff,BsWifi } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { networkMode } from "../features/networkSlice";

const InternetConnectionProvider = ({ children }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const toastIdRef = useRef();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    
    setIsOnline(navigator.onLine);

    const handleOffline = () => {
      setIsOnline(false);
      dispatch(networkMode(false));
      close(); // Close any previous toast notifications
      addToast(); // Show offline notification
    };

    const handleOnline = () => {
      setIsOnline(true);
      dispatch(networkMode(true))
      close(); // Close the offline notification when back online
      onlineToast()
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  function close() {
    toast.closeAll(toastIdRef.current);
  }

  function addToast() {
    toastIdRef.current = toast({
      title: "You're Offline",
      description: "Please make sure you have an internet connection",
      status: "warning",
      duration: null,
      isClosable: true,
      icon: <BsWifiOff size={20} />,
    });
  }
  function onlineToast() {
    toastIdRef.current = toast({
      title: "You're Online",
      description: "Welcome, you internet connected successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
      icon: <BsWifi size={20} />,
    });
  }

  return children;
};

export default InternetConnectionProvider;
