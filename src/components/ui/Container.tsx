interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <div {...props}>{children}</div>;
};

export default Container;
