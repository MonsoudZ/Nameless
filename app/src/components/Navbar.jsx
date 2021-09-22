import { Link } from "react-router-dom";
import DropDown from "./DropDown"

export default function Navbar() {
  return (
    <nav>
      <DropDown>

      </DropDown>
      <Link to="/">
        <h1>NameLess</h1>
      </Link>
      <ul>
        <li>
          <Link to="/names">All Comments</Link>
        </li>
        <li>
          <Link to="/new">Add New Comment</Link>
        </li>
      
      </ul>
    </nav>
  );
}