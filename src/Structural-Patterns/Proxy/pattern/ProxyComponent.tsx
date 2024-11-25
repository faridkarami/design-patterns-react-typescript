interface ProxyProps {
  role: string;
  component: React.FC;
}

const ProxyComponent: React.FC<ProxyProps> = ({ role, component: Component }) => {
  if (role === 'admin') {
    return <Component />;
  }
  return <div>You do not have permission to access this section.</div>;
};

export default ProxyComponent;
