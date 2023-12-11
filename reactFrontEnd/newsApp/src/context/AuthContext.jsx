import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {

    const userLogedIn = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await userLogedIn.json();
    console.log("result", result);

    if (result.statusCode === 200) {
      setUser(result);
    } else {
      setUser(null);
    }
    return result;
  };

  const logout = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/auth/logout")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};