import React from "react";

type Props={
    children:React.ReactNode
    styles:React.CSSProperties
}

export const Nav = (props:Props) => {
    const {children,styles} = props;
  return <nav style={styles}>{children}</nav>;
};

