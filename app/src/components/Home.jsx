import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNames } from "../services";

export default function TeamsList() {
  const [name, setName] = useState([]);

  useEffect(() => {
    const getNames = async () => {
      setName(await fetchNames());
    };
    getNames();
  }, []);

  return (
    <div>
      <div>
        {name.map((name) => {
          return (
            <Link to={`/names/${name.id}`} key={name.id}>
              <h3>{name.fields.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}