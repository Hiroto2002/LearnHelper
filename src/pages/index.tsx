import { useCustomRouter } from "@/hooks/useCustomRouter";
import { NextPage } from "next";
import { useEffect } from "react";

const login:NextPage=()=> {
  const {handlePushRouter} = useCustomRouter()
  useEffect(()=>{
    handlePushRouter('/home')
  },[])
  return (
    <>
    <></>
    </>
  );
}

export default login;