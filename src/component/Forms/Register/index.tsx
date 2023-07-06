import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Button, Text, Select } from "@mantine/core";

import TextLabel from "../../Label";
import { registerAPI, registerPOST } from "../../../api/api";
import { roles_enum } from "../../../constants/Enums";
import { DatePickerInput } from "@mantine/dates";

const RegisterForm = () => {
  const navigation = useNavigate();
  const registerForm = useForm<registerPOST>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      dob: new Date(),
      role: roles_enum.moderator,
    },
    validate: {
      name: (value) => {
        if (!value) return "Username cannot be  empty";
      },
      email: (value) => {
        if (!value) return "Email cannot be left empty";
      },
      password: (value) => (value ? null : "Password cannot be left empty"),
    },
  });

  const submitHandler = async (data: registerPOST) => {
    try {
      const response = await registerAPI(data);
      console.log(response);
      if (response) {
        navigation("/login");
        // registerForm.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={registerForm.onSubmit(submitHandler)}
      className="grid gap-4 w-full max-w-sm"
    >
      <TextInput
        label={<TextLabel value="Username" />}
        {...registerForm.getInputProps("name")}
      />

      <TextInput
        label={<TextLabel value="Email" />}
        {...registerForm.getInputProps("email")}
      />
      <PasswordInput
        label={<TextLabel value="Password" />}
        {...registerForm.getInputProps("password")}
      />

      <Select
        label={<TextLabel value="Account Type" />}
        data={[{ value: "moderator", label: "Moderator" }]}
        {...registerForm.getInputProps("role")}
      />
      <DatePickerInput
        label={<TextLabel value="Date " />}
        {...registerForm.getInputProps("dob")}
      />
      <Button type="submit" className="mt-2">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
