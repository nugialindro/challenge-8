import { useHistory } from "react-router-dom";
import backImg from "./img/back.png";
import "./Form.css";

function BackButton() {
  const history = useHistory();

  return (
    <button className="back-button mb-5" onClick={() => history.goBack()}>
      <img src={backImg} alt="editplayer"></img>
    </button>
  );
}

export default BackButton;
