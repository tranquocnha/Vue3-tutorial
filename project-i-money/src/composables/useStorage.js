import { ref } from "vue";
import { projectStorage } from "../config/firebase";
import { useUser } from "./useUser";
import {
  getDownloadURL,
  ref as refStorage,
  uploadBytesResumable,
} from "firebase/storage";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileRef = refStorage(projectStorage, filePath.value);

    error.value = null;
    try {
      const snapshot = await uploadBytesResumable(fileRef, file);
      url.value = await getDownloadURL(snapshot.ref);
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return { error, uploadFile, filePath, url };
};

export default useStorage;
