import { Title } from "@mantine/core";
import LoginForm from "../../component/Forms/Login";
import FormWrapper from "../../Layout/FormWrapper";

const LoginPage = () => {
  return (
    <section className=" justify-center p-4 rounded  max-w-sm mx-auto  my-20">
      <FormWrapper>
        <Title order={3} className="text-center mb-6">
          Login Form
        </Title>
        <LoginForm />
      </FormWrapper>
    </section>
  );
};

export default LoginPage;
