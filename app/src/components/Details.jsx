import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchComment } from "../services";
import Delete from "./Delete";

export default function Details() {
  const [name, setName] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getTeam = async () => {
      setName(await fetchComment(id));
      setLoading(false);
    };

    getTeam();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>LOADING!!!!</div>;
  }

  return (
    <div>
      <h1>{name.fields.name}</h1>
      <h4>{name.fields.comment}</h4>
      <div>
        <Link to={`/names/${id}/edit`}>Edit Name</Link>
        <Delete id={id} />
      </div>
    </div>
  );
}