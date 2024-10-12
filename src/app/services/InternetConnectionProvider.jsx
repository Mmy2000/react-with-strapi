import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'


const InternetConnectionProvider = ({ children }) => {
  const toast = useToast();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);
  window.addEventListener("offline", (e) => {
    console.log("offline");
  });

  window.addEventListener("online", (e) => {
    console.log("online");
  });

  if (!isOnline) {
    return { children };
  }
  return {children};
};

export default InternetConnectionProvider