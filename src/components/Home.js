import React from "react";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { test, setTest } = useGlobalContext();
  return <div className="">{test}</div>;
};

export default Home;
