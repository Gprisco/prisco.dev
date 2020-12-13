import * as React from "react";

export interface SpacerProps {
  sectionId: string;
}

const Spacer: React.FunctionComponent<SpacerProps> = ({ sectionId: id }) => {
  return <section id={id} style={{ height: "100px" }} />;
};

export default Spacer;
