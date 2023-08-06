"use client";
import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext({
  refreshKey: 0,
  triggerRefresh: () => {
    console.log('RefreshContext not yet initialized');
  },
});

export const useRefresh = () => {
  return useContext(RefreshContext);
};

export const RefreshProvider = ({ children }: { children: React.ReactNode }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshKey(refreshKey + 1);
  };

  return (
    <RefreshContext.Provider value={{ refreshKey, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};
