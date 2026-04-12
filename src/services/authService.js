import API from "./api";

export const register = async (name, email, password) => {
  const response = await API.post("/register", { name, email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await API.post("/login", { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  // Decode token sederhana (tanpa library)
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload;
  } catch {
    return null;
  }
};