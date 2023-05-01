import { Text } from "@/components/elements/text/Text";
import React, { CSSProperties } from "react";

type Props = {
    children: React.ReactNode;
};
export const RecordContainer = (props:Props) => {
    const {children} = props;
  return <div style={styles}>{children}</div>;
};

const styles:CSSProperties = {
    background: '#fff',
    height: '175px',
    width: '90vw',
    margin: '30px 0',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
}