import { ref } from "vue";
import { projectAuth } from "../config/firebase";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(function (_user) {
  console.log(user);
  console.log(_user);
  if (_user) user.value = _user;
});

function getUser() {
  console.log(user);
  return { user };
}

export function useUser() {
  return { getUser };
}
