import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { Provider };
