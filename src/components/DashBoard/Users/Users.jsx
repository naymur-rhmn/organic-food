import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Updating soon...</div>;
};

export default Users;
