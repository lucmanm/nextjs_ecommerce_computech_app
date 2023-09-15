interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-2 my-4 md:container">{children}</div>;
};

export default Container;
