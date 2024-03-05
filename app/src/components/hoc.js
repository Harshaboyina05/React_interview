import React, { useEffect } from 'react';

// Higher-order function
const withLogging = (Arg) => {
  return (props) => {
    useEffect(() => {
      console.log('Component is mounted');
    });

    return <Arg {...props} />;
  };
};

// Component
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

// Enhance MyComponent with logging
const EnhancedComponent = withLogging(MyComponent);

export default EnhancedComponent;
