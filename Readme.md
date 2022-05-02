# Alten react store

A very minimal, easy to setup and use package for global storage in a React application.

Please keep in mind that this is not the most efficient way to manage global state. For larger applications a solution like MobX or Redux is advised.

### Example usage

The app.tsx file:
```tsx
import Store from "alten-react-store";
import { MyComponent } from "./MyComponent";

function App() {

  return (
    <div>
     {/* the INITIAL_STATE holds our initial global data. */}
      <Store INITIAL_STATE={{name: "Maike", age: 56}}>
            {/* The global data will be used in MyComponent. */}
          <MyComponent /> 
      </Store>
    </div>
  );
}

export default App;
```

Now the component where we use the global data:
```tsx
import React from "react";
import { useStore } from "typescript-react-test";

interface IMyComponentProps {}

export const MyComponent: React.FunctionComponent<IMyComponentProps> = (props) => {

    const store = useStore<{name: string, age: number}>();

    return (
        <div>
            <div>{store.state.name}</div>
            <button onClick={() => store.setState({...store.state, name: "Gijs"})}>Change name to Gijs</button>
        </div>
    );
};
```
