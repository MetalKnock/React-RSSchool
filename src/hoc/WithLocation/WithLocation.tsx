import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithLocationProps {
  location: ReturnType<typeof useLocation>;
}

export default function WithLocation<Props extends WithLocationProps>(
  Component: React.ComponentType<Props>
) {
  function ComponentWithLocationProp(props: Omit<Props, keyof WithLocationProps>) {
    let location = useLocation();
    return <Component {...(props as Props)} location={location} />;
  }

  return ComponentWithLocationProp;
}
