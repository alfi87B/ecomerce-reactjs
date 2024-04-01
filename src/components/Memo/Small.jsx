import React from "react";

// eslint-disable-next-line react/display-name
const Small = React.memo(({ value }) => {
  console.log(' Me volví a llamar :(  ');
  // http?

  return <small> {value} </small>;
});

export default Small;
