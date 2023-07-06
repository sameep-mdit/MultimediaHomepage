import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Button, Text } from "@mantine/core";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import TextLabel from "../../Label";
import { loginPOST, loginAPI } from "../../../api/api";

const LoginForm = () => {
  const loginForm = useForm<loginPOST>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        if (!value) return "Email cannot be  empty";
      },
      password: (value) => (value ? null : "Password cannot be left empty"),
    },
  });

  const submitHandler = async (data: loginPOST) => {
    loginForm.reset();
    try {
      const response = await loginAPI(data);
      console.log(response);
      const token = response.data?.token;
      if (response) {
        toast("Login Sucessfull");
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err) {
      toast("Login Failed");
    }
  };
  return (
    <form
      onSubmit={loginForm.onSubmit(submitHandler)}
      className="grid gap-4  max-w-2xl"
    >
      <TextInput
        label={<TextLabel value="Email" />}
        {...loginForm.getInputProps("email")}
      />
      <PasswordInput
        label={<TextLabel value="Password" />}
        {...loginForm.getInputProps("password")}
      />
      <Text className="font-semibold mt-2">
        Does not have a account ? <Link to="/register">register</Link>
      </Text>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
