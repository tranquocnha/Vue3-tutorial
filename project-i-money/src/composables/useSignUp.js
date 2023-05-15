import { ref } from "vue";
import { projectAuth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    console.log("repo", email, password);
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");

    updateProfile(projectAuth.currentUser, {
      displayName: fullName,
    })
      .then(() => {
        console.log("Done", fullName);
      })
      .catch((err) => {
        console.log(err);
        error.value = err.message;
      });

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
