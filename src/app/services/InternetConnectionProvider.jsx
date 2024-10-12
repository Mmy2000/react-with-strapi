import { useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'


const InternetConnectionProvider = ({ children }) => {
  const toast = useToast();
  const toastIdRef = useRef();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  function close() {
    toast.closeAll(toastIdRef.current);
  }

  window.addEventListener("offline", (e) => {
    setIsOnline(false)
    close()
  });

  window.addEventListener("online", (e) => {
    setIsOnline(true)
  });

  if (!isOnline) {
    return { children };
  }
  return {children};
};

export default InternetConnectionProvider