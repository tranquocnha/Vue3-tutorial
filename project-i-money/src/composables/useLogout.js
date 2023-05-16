import { ref } from "vue";
import { projectAuth } from "../config/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await signOut(projectAuth);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function uselogout() {
  return { error, logout };
}
