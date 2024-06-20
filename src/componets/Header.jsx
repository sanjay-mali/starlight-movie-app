import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {

  return (
    <>
      <div className="header">
        <div className="logo">
          <h5>Starlight </h5>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Movie</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/tvshow">TV Show</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
