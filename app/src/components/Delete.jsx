import React from "react";
import { useHistory } from "react-router";
import { deleteName } from "../services";

export default function DeleteButton(props) {
  const history = useHistory();

  const handleDelete = async () => {
    await deleteName(props.id);
    history.push("/names");
  };

  return <button class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"onClick={handleDelete}>Delete</button>;
}