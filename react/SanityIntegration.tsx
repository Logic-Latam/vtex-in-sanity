// import gql from 'graphql-tag';
import React, { FC, ReactNode } from 'react';
// import { useQuery } from 'react-apollo';

type SanityIntegrationProps = {
  children: ReactNode;
};

const SanityIntegration: FC<SanityIntegrationProps> = ({ children }) => {
  // const { loading, error, data } = useQuery(gql`${query}`, {
  //   fetchPolicy: 'cache-and-network',
  // });

  // if (loading) {
  //   return <>Loading...</>
  // }

  // if (error) {
  //   return <>{error.message}</>
  // }

  console.log('criança', children)

  return (
    <div className={`sanity`}>
      {children}
      {/* {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...data });
        }
        return child;
      })} */}
    </div>
  );
};

export default SanityIntegration;
