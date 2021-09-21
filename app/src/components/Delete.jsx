import React from "react";
import { useHistory } from "react-router";
import { deleteName } from "../services";

export default function DeleteButton(props) {
  const history = useHistory();

  const handleDelete = async () => {
    await deleteName(props.id);
    history.push("/names");
  };

  return <button onClick={handleDelete}>Delete</button>;
}