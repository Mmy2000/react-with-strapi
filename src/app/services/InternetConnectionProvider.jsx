import { useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsWifiOff } from "react-icons/bs";

const InternetConnectionProvider = ({ children }) => {
  const toast = useToast();
  const toastIdRef = useRef();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOffline = () => {
      setIsOnline(false);
      close(); // Close any previous toast notifications
      addToast(); // Show offline notification
    };

    const handleOnline = () => {
      setIsOnline(true);
      close(); // Close the offline notification when back online
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

  return children;
};

export default InternetConnectionProvider;
