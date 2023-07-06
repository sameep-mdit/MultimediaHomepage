import { GlobalProvider } from "./Context/HomeContext";

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};
