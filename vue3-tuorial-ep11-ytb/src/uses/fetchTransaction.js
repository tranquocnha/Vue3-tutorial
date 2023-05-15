import { ref } from "vue";

export default function () {
  const transactions = ref([]);
  const error = ref(null);

  const fetchAllAPI = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      console.log(response);

      if (!response.ok) throw new Error("Something went wrong.");

      transactions.value = await response.json();
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };

  return {
    transactions,
    error,
    fetchAllAPI,
  };
}
