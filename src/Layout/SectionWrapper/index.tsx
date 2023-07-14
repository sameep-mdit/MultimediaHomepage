interface IPageWrapper {
  children: React.ReactNode;
  className?: string;
}

const style = "p-4 mx-auto max-w-6xl w-full h-full rounded-lg ";
const SectionWrapper: React.FC<IPageWrapper> = ({ children, className }) => {
  const newClassName = className ? `${style} ${className}` : style;
  return <article className={newClassName}>{children}</article>;
};

export default SectionWrapper;
