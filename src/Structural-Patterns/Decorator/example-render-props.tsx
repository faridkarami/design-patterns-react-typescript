type WithLoggerProps<P> = {
  children: (props: P) => React.ReactNode;
} & P;

const WithLogger = <P extends object>({ children, ...props }: WithLoggerProps<P>) => {
  console.log('Props:', props);
  return <>{children(props as P)}</>;
};

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

const Usage: React.FC = () => {
  return (
    <WithLogger<ButtonProps> label="Click Me">
      {(props) => <Button {...props} />}
    </WithLogger>
  );
};

export default Usage;
