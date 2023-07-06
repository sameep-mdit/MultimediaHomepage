import { ReactNode } from "react";
import { Title } from "@mantine/core";

interface ChildProps {
  children: ReactNode;
  title?: string;
}

const FormWrapper = ({ children, title }: ChildProps) => {
  return (
    <div>
      {title && <Title order={3}>{title}</Title>}
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
