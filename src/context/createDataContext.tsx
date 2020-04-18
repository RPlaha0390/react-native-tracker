import React, { useReducer, createContext } from 'react';
import { RootState, Action } from './types';

interface Bound {
  [key: string]: (param?: any) => {};
}

export interface AuthContextProps {
  state: RootState;
  actions: Bound;
}

export default (
  reducer: React.Reducer<RootState, Action>,
  actions: any,
  defaultState: RootState
) => {
  const Context = createContext<AuthContextProps>({
    state: {
      token: null,
      errorMessage: ''
    },
    actions: {}
  });

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer<React.Reducer<RootState, Action>>(
      reducer,
      defaultState
    );

    const boundActions: Bound = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, actions: { ...boundActions } }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
