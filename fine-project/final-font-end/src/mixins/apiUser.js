import axios from "axios";

export default function () {
  async function checkLogin(username, password) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/${username}&${password}`
      );
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function register(userName, password, fullName) {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/user", {
        userName,
        password,
        fullName,
      });
      // Xử lý phản hồi từ máy chủ
      console.log("[1] register", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function createNote(context, category) {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/note", {
        category,
        context,
      });
      // Xử lý phản hồi từ máy chủ
      console.log("[3] createNote", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function updateNote(id, context, category) {
    try {
      const response = await axios.put("http://localhost:8080/api/v1/note", {
        id,
        category,
        context,
      });
      // Xử lý phản hồi từ máy chủ
      console.log("[4] updateNote", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function detailNote(id) {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/note/" + id
      );
      // Xử lý phản hồi từ máy chủ
      console.log("[5] detailNote", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function deleteNote(id) {
    try {
      const response = await axios.delete(
        "http://localhost:8080/api/v1/note/" + id
      );
      // Xử lý phản hồi từ máy chủ
      console.log("[3] createNote", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  async function getList() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/note/get-all"
      );
      // Xử lý phản hồi từ máy chủ
      console.log("[3] getList", response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  }

  return {
    checkLogin,
    register,
    getList,
    createNote,
    deleteNote,
    updateNote,
    detailNote,
  };
}
