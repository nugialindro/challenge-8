import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../components/Form.css";
import newImg from "./img/new.png";
import editImg from "./img/edit.png";
import findImg from "./img/find.png";

function FormMenu() {
  return (
    <>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/create-player">
          <img src={newImg} alt="createplayer"></img>
          <p>Create Player</p>
        </Nav.Link>
      </div>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/edit-player">
          <img src={editImg} alt="editplayer"></img>
          <p>Edit Player</p>
        </Nav.Link>
      </div>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/search-player">
          <img src={findImg} alt="searchplayer"></img>
          <p>Search Player</p>
        </Nav.Link>
      </div>
    </>
  );
}

export default FormMenu;
