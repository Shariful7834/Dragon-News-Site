import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "shariful Islam" });

  const authInfo = { user };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
