interface IPageWrapper {
  children: React.ReactNode;
  className?: string;
}

const style = "w-full  h-full ";
const PageWrapper: React.FC<IPageWrapper> = ({ children, className }) => {
  const newClassName = className ? `${style} ${className}` : style;
  return (
    <>
      <article className={newClassName}>
        <div className="max-w-5xl  mx-auto pb-6 w-full">{children}</div>
      </article>
    </>
  );
};

export default PageWrapper;

