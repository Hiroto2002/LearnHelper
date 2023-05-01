import React from "react";

type Props={
    children:React.ReactNode
    style:React.CSSProperties
}

export const Nav = (props:Props) => {
    const {children,style} = props;
  return <nav style={style}>{children}</nav>;
};

