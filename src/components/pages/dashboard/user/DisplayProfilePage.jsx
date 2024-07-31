import { Card } from "react-bootstrap";
import Moment from "react-moment";

import IsUser from "../../../templates/Authentication/IsUser";

import useAppContext from "../../../../hooks/useAppContext";

/**
 * DisplayProfilePage Component
 *
 * A component that displays the profile page of a user.
 *
 * @returns {React.Element} The profile page component.
 */
const DisplayProfilePage = () => {
  const { state } = useAppContext();
  const { userReducers } = state;
  const { profile } = userReducers;

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
