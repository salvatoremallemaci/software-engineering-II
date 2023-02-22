import { useNavigate } from "react-router-dom";
import { Button,  Container, Row ,Col} from "react-bootstrap";

import '../styles/ProfileLocalGuide.css';
import { default as Parking } from "../icons/parking.svg";
import { default as Hut } from "../icons/hut.svg";
import { default as Hike } from "../icons/hiking.svg";

function ProfileLocalGuide(props) {

    const navigate = useNavigate();
  
    return (
      <Container fluid className="">
        <Row>
          <Col md={4} sm={6} xs={12} className="box-center mb-4">
          <Button className="manage-btn man-hike-btn box-center" onClick={() => navigate("/hikeManager")}> 
          <img src={Hike} alt="user_image" className="mb-4" style={{width:"70px", height:"70px"}} /> 
          <h3>Manage Hikes</h3>
          </Button>
        </Col>
        <Col md={4} sm={6}  xs={12}className="box-center mb-4" onClick={() => navigate("/hutManager")}>
        <Button className="manage-btn man-hut-btn box-center"> 
        <img src={Hut} alt="user_image" className="mb-4" style={{width:"80px", height:"80px"}}/> 
        <h3> Manage Huts</h3>
        </Button>
        </Col>
        <Col md={4} sm={6}  xs={12} className="box-center mb-4" onClick={() => navigate("/parkingManager")}>
        <Button className="manage-btn man-park-btn box-center"> 
        <img src={Parking} alt="user_image" className="mb-4 man-park-icon" style={{width:"90px", height:"90px"}}/>  
        <h3>Manage Parkings</h3>
        </Button>
        </Col>
        </Row>
    </Container>
);
}


export default ProfileLocalGuide;
