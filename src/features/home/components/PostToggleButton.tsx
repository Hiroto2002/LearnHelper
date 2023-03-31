import { RadiusButton } from "@/components/elements/button/RadiusButton";
import { Styles } from "@/types/styles";
import React from "react";

type Props={
    handleOpen:()=>void
}
export const PostToggleButton = (props:Props) => {
    const {handleOpen} = props;
  return <RadiusButton style={styles.container} onClick={handleOpen}>投稿</RadiusButton>;
};

const styles:Styles = {
    container:{
        position:"fixed",
        right:0,
        bottom:"100px"
    }
}
