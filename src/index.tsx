import React from "react";

interface IDemoProps {
  name: string;
}

const Demo: React.FunctionComponent<IDemoProps> = (props) => (
  <div>Hey {props.name}, this is the Demo component TEST 6666.</div>
);

export default Demo;