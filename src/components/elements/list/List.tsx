import { Styles } from "@/types/styles";
import React from "react";

type Props = {
    children: React.ReactNode;
};
export const List = (props:Props) => {
    const {children} = props;
  return <div style={styles.container}>{children}</div>;
};

const styles: Styles = {
    container: {
      height: '100vh',
      margin: '80px 0 0 0',
    },
  };