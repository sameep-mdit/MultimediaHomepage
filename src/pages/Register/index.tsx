import FormWrapper from "../../Layout/FormWrapper";

import { Title } from "@mantine/core";
import RegisterForm from "../../component/Forms/Register";

const RegisterPage = () => {
  return (
    <section className=" justify-center p-4 rounded  max-w-sm mx-auto  my-20">
      <FormWrapper >
        <Title order={3} className="text-center mb-6">
          Register Form
        </Title>
        <RegisterForm />
      </FormWrapper>
    </section>
    
  );
};

export default RegisterPage;
