import { useCustomRouter } from "@/hooks/useCustomRouter";
import { NextPage } from "next";
import { useEffect } from "react";

const Login:NextPage=()=> {
  const {handlePushRouter} = useCustomRouter()
  useEffect(()=>{
    handlePushRouter('/report')
  },[])
  return (
    <>
    <></>
    </>
  );
}

export default Login;