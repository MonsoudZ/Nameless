import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNames } from "../services";

export default function TeamsList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getNames = async () => {
      setTeams(await fetchNames());
    };
    getNames();
  }, []);

  return (
    <div>
      <div>
        {teams.map((name) => {
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