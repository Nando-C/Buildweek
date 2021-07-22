import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Pagination } from "react-bootstrap";

import DefaultProfile from "../assets/default_profile.jpeg"

const People = (props) => {
  const [profile, setProfile] = useState(null);
  const [total, setTotal] = useState(null);
  const [links, setLinks] = useState(null);

  const getProfiles = async (pag='/profile?limit=3') => {
    const apiURL = process.env.REACT_APP_BE_URL
    let response = await fetch(
      `${apiURL}${pag}`
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
    setTotal(profiles.total);
    setLinks(profiles.links)
  };
  
  useEffect(() => {
    // const getProfiles = async () => {
    //   const apiURL = process.env.REACT_APP_BE_URL
    //   let response = await fetch(
    //     `${apiURL}${pag}`
    //     // {
    //     //   headers: {
    //     //     Authorization:
    //     //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
    //     //   },
    //     // }
    //   );
    //   let profiles = await response.json();
    //   console.log("profiles", profiles.profiles);
    //   setProfile(profiles.profiles);
    //   setTotal(profiles.total);
    //   setLinks(profiles.links)
    // };
    getProfiles();
  }, []);

  return (<>
    <Container fluid className="px-0">
      {links !== null 
      ? <Row className='justify-content-center mt-4'>
          <Pagination>
            {links?.first && <Pagination.Item onClick={()=> getProfiles(links?.first)}>First</Pagination.Item>} 
            {/* {links?.first && <Pagination.First onClick={()=> getProfiles(links?.first)}/>}  */}
            {links?.prev && <Pagination.Item onClick={()=> getProfiles(links?.prev)}>prev</Pagination.Item>}
            {/* {links?.prev && <Pagination.Prev onClick={()=> getProfiles(links?.prev)}/>} */}
            {links?.next && <Pagination.Item onClick={()=> getProfiles(links?.next)}>next</Pagination.Item>}
            {/* {links?.next && <Pagination.Next onClick={()=> getProfiles(links?.next)}/>} */}
            {links?.last && <Pagination.Item onClick={()=> getProfiles(links?.last)}>Last</Pagination.Item>}
            {/* {links?.last && <Pagination.Last onClick={()=> getProfiles(links?.last)}/>} */}
            <Pagination.Item className='ml-5'>... {profile.length} of {total} Profiles</Pagination.Item>
          </Pagination>
        </Row>
      : <></>
    }
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