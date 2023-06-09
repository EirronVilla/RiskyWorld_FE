import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Board from "./components/board.jsx";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="body-background">
        <Container fluid>
          <Login/>
        </Container>
      </div>
    ),
  },
  {
    path: "/game",
    element: (
      <Container fluid>
        <Board />
      </Container>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
