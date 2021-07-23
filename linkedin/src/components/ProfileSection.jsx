import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form, Image, Dropdown, DropdownButton } from "react-bootstrap";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import About from "./About";
// import { propTypes } from "react-bootstrap/esm/Image";


const ProfileSection = ({obj}) => {
  // console.log(obj)
  
  const [profile, setProfile] = useState({
    // "_id": "5d84937322b7b54d848eb41b", //server generated
      name: '',
      surname: '',
      email: '',
      bio: '',
      title: '',
      area: '',
      image: '', //server generated on upload
    username: '', //server generated from Auth
    // "createdAt": "2019-09-20T08:53:07.094Z", //server generated
    // "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
    // "__v": 0 //server generated
  }
)

  useEffect(() => {
    setProfile({
      name: obj?.name,
      surname: obj?.surname,
      email: obj?.email,
      bio: obj?.bio,
      title: obj?.title,
      area: obj?.area,
      image: obj?.image,
      username: obj?.username
    })
  },[obj])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value
    })
  }

  const editProfile = async (e) => {
    e.preventDefault() 

    console.log(profile)
    // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
    try {
      const apiURL = process.env.REACT_APP_BE_URL
      const _id = obj._id
        const response = await fetch(
          // `https://striveschool-api.herokuapp.com/api/profile/`, 
          `${apiURL}/profile/${_id}`,
          {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: {
            //     "Authorization": `Bearer ${apiToken}`,
                "Content-type": "application/json"
            }
        })
        if(response.ok) {
            console.log(response);
            const data = await response.json()
            console.log(data)
            setShow(false)
        } else {
            console.log('we had a problem')
        }
        // const data = await response.json()
        // console.log(data)
       
    } catch (err) {
        console.log(err)
    }
  }

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const editPicture = async (e) => {

    const newPicture = new FormData()
    newPicture.append('image', e.target.files[0])

    // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
    try {
      const apiURL = process.env.REACT_APP_BE_URL
      const _id = obj._id

        const response = await fetch(
          // `https://striveschool-api.herokuapp.com/api/profile/60c89716c193050015871546/picture`,
          `${apiURL}/profile/${_id}/picture`,
          {
            method: 'POST',
            body: newPicture,
            // headers: {
            //     "Authorization": `Bearer ${apiToken}`,
            // }
        })
        if(response.ok) {
            setShow(false)
        } else {
            console.log('we had a problem')
        }
    } catch (err) {
        console.log(err)
    }
  }
  const apiURL = process.env.REACT_APP_BE_URL
  const _id = obj?._id

  // const getCVPdf = async () => {
  //   try {
  //     const apiURL = process.env.REACT_APP_BE_URL
  //     const _id = obj._id

  //     const response = await fetch(
  //       `${apiURL}/profile/${_id}/CV`
  //     )
  //     if(response.ok) {
  //       console.log("CV pdf was successfully generated!!");
  //       // console.log(response);
  //       // const cv = await response.blob()
  //       // console.log(cv);
  //     } else {
  //       console.log('Error generating the CV pdf file');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          id='backgroundimg'
          className="w-100 "
          src="https://picsum.photos/200/300"
        />
        <Image src={obj?.image} onClick={handleShow2} id="ember47" height="150" width="150" roundedCircle />

        {/* <img onClick={handleShow2} width="150" src={obj?.image}
          height="150" alt="Edited"
          id="ember47"
          className="profile-photo-edit__preview ember-view" /> */}
        <Card.Body>
          <Container className='mt-3'>
            <Row>
              <Col style={{ textAlign: 'left' }}>
                <Card.Text>
                  <div>
                    {" "}
                    <h3 className='h3'> {profile.name} {profile.surname} </h3>
                    <span className='junior'>{profile.title}</span> <br />
                    <span className='area'>
                      {profile.area}{" "}
                      <a href="/">Contact info</a>
                    </span>{" "}
                    <br />
                    <span>
                      <a className='connections' href="/">6 connections</a>
                    </span>
                  </div>
                </Card.Text>
                <div className="d-flex">
                  <Button variant="primary" className="badge-pill m-1">
                    Open To
                  </Button>
                  <Button variant="outline-secondary" className="badge-pill m-1">
                    Add section
                  </Button>
                  {/* <Button variant="outline-secondary" className="badge-pill m-1">
                    More
                  </Button> */}
                  
                  <DropdownButton id="dropdown-profile" title='More' variant="outline-secondary" className=''>
                    {/* <Dropdown.Item className='d-flex justify-content-between' onClick={getCVPdf}> */}
                    <Dropdown.Item href={`${apiURL}/profile/${_id}/CV`} className='d-flex justify-content-start'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                          <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-0 pl-2">
                        Export CV
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href={`${apiURL}/profile/${_id}/experiences/CSV`} className='d-flex justify-content-between'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                          <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
                        </svg>
                      </div>
                      <div>
                      <p className="mb-0 pl-2">
                        Export Experiences - CSV
                        </p>
                      </div>
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
                  </svg> */}
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>

                </svg> <br />

                Istituto Alberghiero e Turismo
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <About bio={profile.bio}/>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={e => editProfile(e)}>
            <Form.Group >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label className="text-muted">First Name</Form.Label>
                  <Form.Control id='name' type="text" value={profile.name} onChange={e => inputChange(e)} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="text-muted">Last Name</Form.Label>
                  <Form.Control id='surname' type="text" value={profile.surname} onChange={e => inputChange(e)} />
                </Form.Group>
              </Form.Row>
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control id='email' type="email" value={profile.email} onChange={e => inputChange(e)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label className='text-mutted'>Bio</Form.Label>
              <Form.Control id='bio' as="textarea" rows={3} value={profile.bio} onChange={e => inputChange(e)} />
            </Form.Group>
            <Form.Group >
              <Form.Label className="text-muted">Title</Form.Label>
              <Form.Control id='title' type="text" value={profile.title} onChange={e => inputChange(e)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label className="text-muted">Country/Region</Form.Label>
              <Form.Control id='area' type="text" value={profile.area} onChange={e => inputChange(e)}/>
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      {/*============= Modal for the Profile Picture =============*/}
      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header className='text-white bg-dark border-bottom-0 ' closeButton='white'>
          <Modal.Title >Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white bg-dark'>
          <Form >
            <Form.Group className='text-center'>
              <Image src={obj?.image} roundedCircle fluid style={{ width: 300, height: 300 }} />
            </Form.Group>
            <Form.Group className='m-3'>
              <Form.Label className='text-mutted mb-3' size="sm"> Upload New Profile Picture</Form.Label>
              <Form.File  id="image"  onChange={editPicture}/>
            </Form.Group >
            <Form.Row className='d-flex justify-content-end'>
              <Button className='m-2' variant="primary" type="submit" >
                Save Changes
              </Button>
            </Form.Row>
          </Form>
        </Modal.Body>
        
        {/* <Modal.Footer className='text-white bg-dark border-top-0'>
        
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ProfileSection;
