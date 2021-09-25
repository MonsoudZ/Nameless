import React from "react";
import { useHistory } from "react-router";
import { deleteName } from "../services";

export default function Delete(props) {
  const history = useHistory();

  console.log("props")
  console.log(props.children[1])
  const handleDelete = async () => {
    await deleteName(props.children[1]);
    history.push("/names");
  };

  return <button class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"onClick={handleDelete}>Delete</button>;
}