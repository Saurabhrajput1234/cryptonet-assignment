import React, { createContext, useEffect, useState } from "react";


export const Context = createContext({
  userData: [],
  fetching: false,
});

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [fetching, setFetching] = useState(true);
 




  
  useEffect(() => {
    setFetching(true);
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setUserData(data.results[0]);
        setFetching(false);
      });
  }, []);

 
  
  console.log(userData,"userdata")
 


  return (
    <>
      <Context.Provider value={{ userData, fetching}}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
