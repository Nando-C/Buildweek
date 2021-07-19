import { useState, useEffect } from "react";
import { Card, Container, Row, Col,  ListGroup } from "react-bootstrap";

import DefaultProfile from "../assets/default_profile.jpeg"

const People = (props) => {
  const [profile, setProfile] = useState(null);

  
  useEffect(() => {
    const getProfiles = async () => {
      const apiURL = process.env.REACT_APP_BE_URL
      let response = await fetch(
        `${apiURL}/profile`
        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
        //   },
        // }
      );
      let profiles = await response.json();
      console.log("profiles", profiles.profiles);
      setProfile(profiles.profiles);
    };
    getProfiles();
  }, []);

  return (<>
    <Container fluid className="px-0">
      {

        profile?.map(el => {
          let DefaultProfilePic

          el.image ? DefaultProfilePic = el.image : DefaultProfilePic = DefaultProfile

          return (
            <Card key={el._id} onClick={() => props.history.push('/profile/' + el._id)}>
              {/* <Card> */}

              {/* <ListGroup variant="flush">

                <ListGroup.Item style={{ textAlign: 'left' }}> */}
                  <Row className='m-3'>
                    <Col md="auto">
                      <img style={{ width: "3em", height: "3em" }} src={DefaultProfilePic} onError={(e) => { e.target.onerror = "null"; e.target.src = DefaultProfile }} alt='1' className="rounded-circle my-2" />
                    </Col>
                    <Col className='ml-auto mt-2'>
                      <Card.Title>
                        {el.name} {el.surname}
                      </Card.Title>
                      <Card.Text>
                        {el.title}
                      </Card.Text>

                    </Col>
                  </Row>
                {/* </ListGroup.Item>
              </ListGroup> */}
              {/* </Card> */}
            </Card>

          )
        })
      } </Container></>
  );
};
  



  export default People