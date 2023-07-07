import { Title } from "@mantine/core";
import LoginForm from "../../component/Forms/Login";
import FormWrapper from "../../Layout/FormWrapper";
import MainWrapper from "../../Layout/MainWrapper";

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="flex items-center flex-col">
        <section className="w-full max-w-xs mx-auto mt-32">
          <FormWrapper>
            <Title order={3} className="text-center mb-6">
              Login Form
            </Title>
            <LoginForm />
          </FormWrapper>
        </section>
      </div>
    </MainWrapper>
  );
};

export default LoginPage;
