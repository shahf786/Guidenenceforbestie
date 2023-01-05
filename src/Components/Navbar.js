import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Aur hai 😂
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to="/college">
          College
        </Link>
        <Link className="dropdown-item" to="/milk">
          Milk
        </Link>
        <Link className="dropdown-item" to="/food">
          Food
        </Link>
        <Link className="dropdown-item" to="/bestmessages">
          Best Messages
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
