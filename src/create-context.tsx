import React from 'react';

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(Context);

    if (ctx === undefined) {
      throw new Error(
        `useContext must be inside a Provider and a value must be provided`,
      );
    }

    return ctx;
  };

  return [useContext, Context.Provider] as const; //without the as const, the return type will be an array with unlimited length that contains any combination of the T or Provider
};
