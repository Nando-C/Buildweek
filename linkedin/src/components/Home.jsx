import {
  // Container,
  Card,
  Button,
  Row,
  Col,
  ListGroup,
  Modal,
  Form,
  Image,
} from 'react-bootstrap';

import { useEffect, useState } from 'react';
import HomeProf from './home-profile';
// import { Profiler } from "react";

const Home = () => {
  const [posts, setPosts] = useState(null);

  const [postIt, setPostIt] = useState({
    text: '',
    user: '',
  });

  const [newPic, setNewPic] = useState();

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = () => setShowEdit(true);

  const getPosts = async () => {
    const apiURL = process.env.REACT_APP_BE_URL;
    let response = await fetch(
      `${apiURL}/posts/`
      // "https://striveschool-api.herokuapp.com/api/posts/",
      // {
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
      //   },
      // }
    );
    let posts = await response.json();
    console.log(posts);

    setPosts(posts.posts.reverse());
    // setPosts(posts.reverse());
  };
  useEffect(() => {
    getPosts();
  }, []);

  // 60c71106291930001560ab94

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfiles = async () => {
      const _id = '60f56e46357fbf325358cc05';
      const apiURL = process.env.REACT_APP_BE_URL;
      let response = await fetch(
        `${apiURL}/profile/${_id}`
        // "https://striveschool-api.herokuapp.com/api/profile/60c89716c193050015871546",
        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c",
        //   },
        // }
      );
      let profiles = await response.json();
      console.log('profiles', profiles);
      setProfile(profiles);
    };
    getProfiles();
  }, []);

  useEffect(() => {}, [posts]);

  const createPost = async () => {
    try {
      const apiURL = process.env.REACT_APP_BE_URL;
      const response = await fetch(`${apiURL}/posts`, {
        // "https://striveschool-api.herokuapp.com/api/posts/", {
        method: 'POST',
        body: JSON.stringify(postIt),
        headers: {
          'Content-type': 'application/json',
          // Authorization:
          // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c",
        },
      });
      if (response.ok) {
        const res = await response.json();
        const postId = res._id;
        console.log('my response', postId, res);
        postAPic(postId);
        alert('data saved successfully');
        getPosts();

        // postAPic
      }
    } catch (e) {
      console.log(e);
    }
    console.log(postIt);
  };
  const editPost = async (postId) => {
    try {
      const apiURL = process.env.REACT_APP_BE_URL;
      const response = await fetch(`${apiURL}/posts${postId}`, {
        // "https://striveschool-api.herokuapp.com/api/posts/", {
        method: 'PUT',
        body: JSON.stringify(postIt),
        headers: {
          'Content-type': 'application/json',
          // Authorization:
          // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c",
        },
      });
      if (response.ok) {
        const res = await response.json();
        const postId = res._id;
        console.log('my response', postId, res);
        postAPic(postId);
        alert('data saved successfully');
        getPosts();

        // postAPic
      }
    } catch (e) {
      console.log(e);
    }
    console.log(postIt);
  };

  // const newPicture = null

  const grabPic = (e) => {
    let newPicture = new FormData();
    newPicture.append('image', e.target.files[0]);
    setNewPic(newPicture);
  };

  const postAPic = async (postId) => {
    // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI'
    try {
      const apiURL = process.env.REACT_APP_BE_URL;
      const response = await fetch(
        `${apiURL}/posts/${postId}/picture`,
        // `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: 'POST',
          body: newPic,
          // headers: {
          //     "Authorization": `Bearer ${apiToken}`,
          // }
        }
      );
      if (response.ok) {
        setShow(false);
      } else {
        console.log('we had a problem');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    try {
      const apiURL = process.env.REACT_APP_BE_URL;
      const response = await fetch(`${apiURL}/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(`Post deleted`);
        getPosts();
      } else {
        console.log('Theres was an error deleting post!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Container> */}
      <Row>
        <Col md={4} className="px-0">
          <HomeProf profile={profile} />
        </Col>
        <Col md={8} className="px-0">
          <Card>
            <Row className="mt-3">
              <Col md={1}>
                <img
                  width="40"
                  src={profile?.image}
                  height="40"
                  alt={profile?.name}
                  // alt="Janusz Kondziarz"
                  id="ember30"
                  className="global-nav__me-photo ember-view rounded-circle d-flex ml-2"
                />
              </Col>

              <Col md={10}>
                <Button
                  variant="outline-secondary"
                  className="badge-pill ml-3 mt-1 w-100 text-left"
                  style={{ height: '95%', border: '1px solid grey' }}
                  onClick={handleShow}
                >
                  Start a post
                </Button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm className="ml-3 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="photosvg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
              </Col>
              <Col sm>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="videosvg"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                </svg>
              </Col>
              <Col sm>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="eventsvg"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                </svg>
              </Col>
              <Col sm>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="writeartsvg"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
              </Col>
            </Row>
          </Card>
          {posts?.slice(0, 50).map((el, i) => (
            <Card className="text-center">
              <Card.Header>
                {' '}
                <Row>
                  {console.log(el.user?.image)}
                  <Col md="auto">
                    <img
                      style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%',
                      }}
                      src={el.user?.image}
                      // src={el.user?.image}
                      alt="logo"
                    />
                  </Col>
                  <Col style={{ textAlign: 'left' }} md="auto">
                    {el.user?.name} {el.user?.surname} <br />{' '}
                    {/* {el.user.name} {el.user.surname} <br />{" "} */}
                    <span className="title text-secondary">
                      {' '}
                      {el.user?.title} {/* {el.user.title}{" "} */}
                    </span>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <Button
                      variant="link"
                      style={{
                        border: 'none',
                        position: 'relative',
                        paddingLeft: '0px',
                      }}
                      onClick={() => {
                        handleShowEdit();
                        setPostIt(el._id);
                      }}
                    >
                      {' '}
                      <Image
                        alt=""
                        src="https://img.icons8.com/ios-filled/30/000000/menu-2.png"
                        fluid
                      />
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text>{el.text}</Card.Text>
                <img
                  src={el.image}
                  max-width="100px"
                  className="w-100"
                  alt="alternative"
                />
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ textAlign: 'left' }}>
                  <hr />
                  <button style={{ border: 'none', backgroundColor: 'white' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>

                    <span
                      aria-hidden="true"
                      class="artdeco-button__text react-button__text "
                    >
                      Like
                    </span>
                  </button>
                  <button style={{ border: 'none', backgroundColor: 'white' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>

                    <span class="artdeco-button__text">Comment</span>
                  </button>

                  <button
                    style={{ border: 'none', backgroundColor: 'white' }}
                    // onClick={()=>handleShow(el._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>

                    <span class="artdeco-button__text">Share</span>
                  </button>

                  <button style={{ border: 'none', backgroundColor: 'white' }}>
                    <span
                      tabindex="-1"
                      id="ember340"
                      class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                      </svg>
                      <span class="artdeco-button__text">Send</span>
                    </span>
                  </button>
                  <button
                    style={{ border: 'none', backgroundColor: 'white' }}
                    onClick={() => deletePost(el._id)}
                  >
                    <span
                      tabindex="-1"
                      id="ember340"
                      class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                    >
                      <img
                        alt=""
                        src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
                      />

                      <span class="artdeco-button__text">Delete</span>
                    </span>
                  </button>
                </ListGroup.Item>
              </ListGroup>

              <Card.Footer className="text-muted" style={{ textAlign: 'left' }}>
                {' '}
                {el.createdAt}
              </Card.Footer>
            </Card>
          ))}
        </Col>
      </Row>
      {/* </Container> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={1}>
              <img
                width="50"
                src={profile?.image}
                height="50"
                alt="Janusz Kondziarz"
                id="ember30"
                className="global-nav__me-photo ember-view rounded-circle d-flex ml-2 "
              />
            </Col>
            <Col xs={11}>
              <div>
                <span className="ml-4">
                  {profile?.name} {profile?.surname}
                </span>{' '}
                <br />
                {/* <span className="ml-4">Janusz Kondziarz</span> <br /> */}
                <Button
                  variant="outline-secondary"
                  style={{ fontSize: '14px' }}
                  className="badge-pill ml-4 mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 1 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                  </svg>
                  Anyone
                  <li-icon
                    aria-hidden="true"
                    type="caret-filled-down-icon"
                    class="share-state-change-button__icon"
                    size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      class="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                    </svg>
                  </li-icon>
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {console.log(postIt)}
              <Form.Control
                // let exper = {Object.values(postIt)}
                value={Object.values(postIt)[0].text}
                onChange={(e) =>
                  setPostIt({
                    user: `${profile?._id}`,
                    text: e.target.value,
                  })
                }
                as="textarea"
                placeholder="What do you want to talk about?"
                style={{ height: '100px', border: 'none' }}
              />

              <a href="/">Add hashtag</a>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: 'left' }}>
          <button style={{ border: 'none', backgroundColor: 'white' }}>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>{' '}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
          <Form.File
            style={{ border: 'none', backgroundColor: 'white' }}
            onChange={grabPic}
          />
          {/* <Button variant="secondary" className='badge-pill ml-auto' onClick={editPost}>
            Edit
          </Button> */}
          <Button
            variant="secondary"
            className="badge-pill ml-auto"
            onClick={createPost}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MODAL TO EDIT POST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={1}>
              <img
                width="50"
                src={profile?.image}
                height="50"
                alt="Janusz Kondziarz"
                id="ember30"
                className="global-nav__me-photo ember-view rounded-circle d-flex ml-2 "
              />
            </Col>
            <Col xs={11}>
              <div>
                <span className="ml-4">
                  {profile?.name} {profile?.surname}
                </span>{' '}
                <br />
                {/* <span className="ml-4">Janusz Kondziarz</span> <br /> */}
                <Button
                  variant="outline-secondary"
                  style={{ fontSize: '14px' }}
                  className="badge-pill ml-4 mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 1 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                  </svg>
                  Anyone
                  <li-icon
                    aria-hidden="true"
                    type="caret-filled-down-icon"
                    class="share-state-change-button__icon"
                    size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      class="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                    </svg>
                  </li-icon>
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {console.log(postIt)}
              <Form.Control
                // let exper = {Object.values(postIt)}
                value={Object.values(postIt)[0].text}
                onChange={(e) =>
                  setPostIt({
                    user: `${profile?._id}`,
                    text: e.target.value,
                  })
                }
                as="textarea"
                placeholder="What do you want to talk about?"
                style={{ height: '100px', border: 'none' }}
              />

              <a href="/">Add hashtag</a>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: 'left' }}>
          <button style={{ border: 'none', backgroundColor: 'white' }}>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>{' '}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
          <Form.File
            style={{ border: 'none', backgroundColor: 'white' }}
            onChange={grabPic}
          />
          {/* <Button variant="secondary" className='badge-pill ml-auto' onClick={editPost}>
            Edit
          </Button> */}
          <Button
            variant="secondary"
            className="badge-pill ml-auto"
            onClick={editPost}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
