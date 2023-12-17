import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")

  const setEmailData = (newEmail) => {
    setEmail(newEmail)
  }

  const setUserIdData = (newUserId) => {
    setUserId(newUserId)
  }


  return (
    <DataContext.Provider value={{email, setEmailData, userId, setUserIdData}}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
