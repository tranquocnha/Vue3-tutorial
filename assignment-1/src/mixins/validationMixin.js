import { defineComponent } from "vue";
import { useField, useForm } from "vee-validate";

export default defineComponent({
  setup() {
    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const { value: name, errorMessage: nameError } = useField(
      "name",
      "required|min:3"
    );
    const { value: email, errorMessage: emailError } = useField(
      "email",
      "required|email"
    );
    const { value: password, errorMessage: passwordError } = useField(
      "password",
      "required|min:6|max:20"
    );

    return {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError,
      onSubmit,
    };
  },
});
