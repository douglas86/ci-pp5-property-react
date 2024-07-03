import IsUser from "../../../templates/Authentication/IsUser";
import useAppContext from "../../../../hooks/useAppContext";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";

const DisplayProfilePage = () => {
  const { state } = useAppContext();
  const { userReducers } = state;
  const { profile } = userReducers;

  console.log("state", state);

  return (
    <IsUser>
      {profile ? (
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img variant="top" src={`${profile.profile_picture}`} />
          <Card.Body>
            <Card.Title>username: {profile.user}</Card.Title>
            <Card.Text>
              Profile created: <Moment fromNow>{profile.created_at}</Moment>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </IsUser>
  );
};

export default DisplayProfilePage;
