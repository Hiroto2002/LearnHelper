import { Text } from "@/components/elements/text/Text";
import React, { CSSProperties } from "react";

type Props = {
    children: React.ReactNode;
};
export const RecordTitle = (props:Props) => {
    const {children} = props;
  return <Text style={styles}>{children}</Text>;
};

const styles:CSSProperties = {
    fontSize: '25px',
    fontWeight: 'bold',
    padding: '40px 0',
}