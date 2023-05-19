import axios from "axios";

export default function () {
  async function checkLogin(username, password) {
    try {
      const response = await axios.get(
        `http://localhost:3000/login?username=${username}&password=${password}`
      );
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }
  async function logout() {
    try {
      const response = await axios.post("http://localhost:3000/logout");
      // Xử lý phản hồi từ máy chủ
      console.log("[2] logout", response.data);
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }
  async function register(username, password, fullName) {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
        fullName,
      });
      // Xử lý phản hồi từ máy chủ
      console.log("[3] register", response.data);
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  return { checkLogin, logout, register };
}
