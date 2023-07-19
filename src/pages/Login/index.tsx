import { Title } from "@mantine/core";

import LoginForm from "../../component/Forms/Login";
import FormWrapper from "../../Layout/FormWrapper";
import MainWrapper from "../../Layout/MainWrapper";

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="flex items-center justify-center flex-col h-screen ">
        <section className="w-full max-w-[320px] mx-auto mb-12 py-6 px-4 rounded bg-white">
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
