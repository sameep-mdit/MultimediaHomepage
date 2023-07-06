import { Title } from "@mantine/core";
import { ReactNode } from "react";

export type Iprops = {
  children: ReactNode;
  title?: string;
};

const BlogWrapper = ({ children, title }: Iprops) => {
  return (
    <div className="w-full  h-full px-4 max-w-4xl mx-auto py-6">
      {title ? <Title className="text-center mb-8">{title}</Title> : null}
      {children}
    </div>
  );
};

export default BlogWrapper;
