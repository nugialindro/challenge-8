import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import BackButton from "./BackButton";
import "./Form.css";
import "../App.css";

function FormEdit() {
  const [newPlayer, setNewPlayer] = useState([]);
  const [username, setUsername] = useState("nugialindro");
  const [email, setEmail] = useState("nugialindro@gmail.com");
  const [password, setPassword] = useState("password");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleNewUsername(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handleNewEmail(event) {
    const value = event.target.value;
    setEmail(value);
  }

  function handleNewPassword(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function handleNewUser() {
    setNewPlayer([...newPlayer, { username, email, password }]);
  }

  const handleSubmit = (event) => {
    console.log(newPlayer);
    setIsSubmit(true);
    event.preventDefault();
  };

  return (
    <div className="form-page">
      <BackButton />
      <Form className="new-player-form" onSubmit={handleSubmit}>
        <h2 className="mb-5">Edit player details</h2>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={handleNewUsername} value={username} type="text" placeholder="username" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleNewEmail} value={email} type="email" placeholder="email@mail.com" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleNewPassword} value={password} type="password" placeholder="password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleNewUser}>
          Submit
        </Button>
      </Form>
      <>
        <div className={cn(isSubmit && "player-details")}>
          {newPlayer.map((data, index) => (
            <div key={index}>
              <h2 className="mb-4">Player Details</h2>
              <p>Username : {data.username} </p>
              <p>Email : {data.email} </p>
              <p>Password : {data.password} </p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default FormEdit;
