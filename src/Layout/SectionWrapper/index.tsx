interface IPageWrapper {
  children: React.ReactNode;
  className?: string;
}

const style = "p-4 pb-8 mx-auto max-w-6xl w-full h-full rounded-lg bg-gray-00";
const SectionWrapper: React.FC<IPageWrapper> = ({ children, className }) => {
  const newClassName = className ? `${style} ${className}` : style;
  return <article className={newClassName}>{children}</article>;
};

export default SectionWrapper;
