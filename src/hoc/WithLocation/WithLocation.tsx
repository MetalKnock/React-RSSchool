import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithLocationProps {
  location: ReturnType<typeof useLocation>;
}

export default function WithLocation<Props extends WithLocationProps>(
  Component: React.ComponentType<Props>
) {
  function ComponentWithLocationProp(props: Omit<Props, keyof WithLocationProps>) {
    const location = useLocation();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...(props as Props)} location={location} />;
  }

  return ComponentWithLocationProp;
}
