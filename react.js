import React from "react";

export default () => {
  const [s, setS] = React.useState();

  return [
    <a key="1" href="/">
      {s}
    </a>,
    <a key="2" href="/foo">
      {s}
    </a>,
    <a key="3" href="/100">
      {s}
    </a>,
  ];
};
