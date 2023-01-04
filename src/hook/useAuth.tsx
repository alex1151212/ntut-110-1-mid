import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  user: string | null;
  //   login: boolean;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
}

const AuthContext = createContext({
  user: null,
  //   login: false,
  setUser: () => {},
  logout: () => {},
} as IAuthContext);

export interface IAuthResponse {
  user: string;
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
