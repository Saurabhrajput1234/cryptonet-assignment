import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({
  userData: [],
  fetching: false,
});

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        console.log(data.results);
        setUserData(data.results[0]);
        setFetching(false);
      } catch (e) {
        console.error("Error fetching user data:", e);

      }
    };

    fetchData();
  }, []);

  console.log(userData, "userdata");

  return (
    <>
      <Context.Provider value={{ userData, fetching }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
