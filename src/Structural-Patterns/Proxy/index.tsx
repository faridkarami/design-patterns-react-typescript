import Button from "./pattern/Button";
import ProxyComponent from "./pattern/ProxyComponent";

const ProxyDesignPattern = () => {
  const userRole = 'admin'; // or user

  return (
    <div>
      <ProxyComponent role={userRole} component={Button} />
    </div>
  );
};

export default ProxyDesignPattern;
