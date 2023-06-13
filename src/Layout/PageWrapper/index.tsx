interface IPageWrapper {
  children: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return <>{children}</>;
};

export default PageWrapper;
