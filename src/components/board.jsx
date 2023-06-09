import { Navigate } from "react-router-dom";
import Map from "./map/map";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Board() {
  if (!sessionStorage.getItem("access")) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        <Row>
            <Col border>
                <div>
                    Username
                </div>
            </Col>
            <Col border>
                <div>
                    Stats
                </div>
            </Col>
            <Col border>
                <div>
                    Options
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs={2}>
                <div> Game Details </div>
            </Col>
            <Col xs={8}>
                <Map/>
            </Col>
            <Col xs={2}>
                <div> Current Players</div>
            </Col>

        </Row>

        <Row>
            <Col>
                <div>
                    Cards
                </div>
            </Col>
            <Col>
                <div>
                    Map domain
                </div>
            </Col>
            <Col>
                <div>
                    Chat
                </div>
            </Col>
        </Row>
      </div>
    );
  }  
}

export default Board;
