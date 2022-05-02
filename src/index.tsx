import React, { createContext, useContext, useState } from "react";

export interface IContext<T> {
  state: T;
  setState: (data: T) => void;
}
const initialContext: IContext<any> = { state: null, setState: () => {} };
export const storeContext = createContext(initialContext);

 export function useStore<T>() {
  return useContext<IContext<T>>(storeContext);
}

export interface IStoreProps {
  INITIAL_STATE: any;
  children?: JSX.Element;
}

export const useProvideStore = (INITIAL_STATE: any) => {
  const [state, setState] = useState<any>(INITIAL_STATE);
  return {
    state,
    setState
  };
}

const Store: React.FunctionComponent<IStoreProps> = (props) => {
  const data = useProvideStore(props.INITIAL_STATE);
  return (
    <storeContext.Provider value={data}>
      {props.children}
    </storeContext.Provider>
  );
}

export default Store;