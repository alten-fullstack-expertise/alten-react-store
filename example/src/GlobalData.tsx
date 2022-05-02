import React from "react";
import { useStore } from "typescript-react-test";

interface IGlobalDataProps {}

export const GlobalData: React.FunctionComponent<IGlobalDataProps> = (props) => {

    const store = useStore<{name: string, age: number}>();

    return (
        <div>
            <div>{store.state.name}</div>
            <button onClick={() => store.setState({...store.state, name: "Gijs"})}>Change name to Gijs</button>
        </div>
    );
};
