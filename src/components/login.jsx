import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../utils/authentication";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(true);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const result = await login(
      usernameRef.current.value,
      passwordRef.current.value
    );
    setLoginSuccess(result);

    if (loginSuccess) {
      navigate("/game");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <div className="box-shadow">
        <div className="border border-dark text-center title-background">
          <p className="title">RISK</p>
        </div>
        <div
          className="border border-dark text-center subtitle"
          style={{ height: "3vh" }}
        >
          Golden Boys Edition
        </div>

        <Form onSubmit={submitHandler} className="form-background" style={{ padding: "15px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              required
              type="text"
              ref={usernameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              ref={passwordRef}
            />
          </Form.Group>

          {!loginSuccess && (
            <div className="errorMessage">
              Nombre de usuario o contraseña incorrectos.
            </div>
          )}

          <Button style={{ width: "100%" }} variant="dark" type="submit">
            ENTRAR
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
