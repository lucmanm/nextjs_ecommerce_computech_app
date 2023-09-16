interface ContainerProps {
  children: React.ReactNode;
  classname: string;
}

const Container: React.FC<ContainerProps> = ({ classname, children }) => {
  return <div className={`my-4 md:container ${classname}`}>{children}</div>;
};

export default Container;
