import axios from "axios";

export default function () {
  async function checkLogin(username, password) {
    try {
      console.log(username, password);
      const response = await axios.get(
        `http://localhost:3000/login?username=${username}&password=${password}`
      );
      console.log("[1] checkLogin", response.data);
      if (response.data) {
        return true;
      } else {
        return false;
      }
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
  async function register(username, password) {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
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
