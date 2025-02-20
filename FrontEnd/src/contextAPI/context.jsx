import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(); // Ensure context is created before use

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to decode token
  const decodedToken = async (token) => {
    try {
      const response = await axios.post("http://localhost:3000/decoding", { token });
      return response.data;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null; // Return null if decoding fails
    }
  };

  // Check if token exists in localStorage on initial render
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const decoded = await decodedToken(token); // Await decoded data
        if (decoded) {
          setUser(decoded);
        }
      }
    };

    checkUser();
  }, []); // Runs only once when the component mounts

  // Login function
  const login = async (token) => {
    localStorage.setItem("token", token);
    const decoded = await decodedToken(token);
    if (decoded) {
      setUser(decoded);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication
export const useAuth = () => {
  return useContext(AuthContext);
};
