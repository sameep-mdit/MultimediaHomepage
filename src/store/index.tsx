import { HomeProvider } from "./Context/HomeContext";

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <HomeProvider>{children}</HomeProvider>;
};
