interface ContainerProps {
  children: React.ReactNode;
  classname: string;
}

const Container: React.FC<ContainerProps> = ({ classname, children }) => {
  return <div className={`my-4 p-2 lg:p-0 ${classname}`}>{children}</div>;
};

export default Container;
