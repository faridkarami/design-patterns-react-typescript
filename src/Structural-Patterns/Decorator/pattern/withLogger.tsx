import React, { useEffect, useRef } from 'react';

const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const log = useRef(false);

    useEffect(() => {
      if (!log.current) {
        console.log('Props:', props);
        log.current = true;
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;