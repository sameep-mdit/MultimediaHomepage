import FormWrapper from "../../Layout/FormWrapper";

import { Title } from "@mantine/core";
import RegisterForm from "../../component/Forms/Register";
import MainWrapper from "../../Layout/MainWrapper";

const RegisterPage = () => {
  return (
    <MainWrapper>
      <div className=" flex items-center flex-col">
        <section className="w-full max-w-xs mx-auto my-8">
          <FormWrapper>
            <Title order={3} className="text-center mb-6">
              Register Form
            </Title>
            <RegisterForm />
          </FormWrapper>
        </section>
      </div>
    </MainWrapper>
  );
};

export default RegisterPage;
