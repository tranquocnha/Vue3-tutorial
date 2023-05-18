import { ref } from "vue";
import { projectFirestore } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);
  async function addRecord(record) {
    error.value = null;
    try {
      const dbRef = collection(projectFirestore, name);
      const response = addDoc(dbRef, record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return { error, addRecord };
};

export default useCollection;
