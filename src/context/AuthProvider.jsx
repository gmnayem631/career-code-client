import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {};
  console.log(children);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
