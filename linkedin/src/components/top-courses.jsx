import React, { Component, } from 'react';

import { Card, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import DefaultProfile from "../assets/default_profile.jpeg"
// import MiniProfileCard from "./profile-card"

// import { withRouter, Link } from "react-router-dom";

class TopCourse extends Component {


    
    render() {

    
      return (
        <Card fluid="true" className="d-flex px-0 py-0">
            <Card.Header style={{fontSize: '20px', fontWeight: 'bold' }} className="d-inline-flex bg-white border-bottom-0 mt-2 justify-content-between">                  
                <p className="mb-0 d-inline-flex my-auto ms-0">Today's top courses</p>
                  <div className="d-flex bg-dark rounded align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
                      <FontAwesomeIcon icon={faInfo} className="d-flex my-auto me-0 text-white fa-xs"/>
                    </div>
            </Card.Header>
            <Card.Body className="ps-3 pb-0 mb-0 pt-0">
                <ol class="list-group list-group-flush">
                    <li class="list-group-item d-flex px-0" key={1}>
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Project management foundations</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>Bonnie Biaffour</p> 
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0"  key={2}>
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Excel Essential Training (Office...</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>Dennis Taylor</p> 
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0"  key={3}>
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Critical Thinking for Better Judge...</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>Becki Saltzman</p> 
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    
                </ol>
            </Card.Body>
            

            <Card.Footer className="align-items-center py-3 pl-2" style={{fontSize: '18px', fontWeight: 'bold' }}>
                    <p className="d-inline-flex mb-0 px-2 ms-3">Show more on LinkedIn Learning</p>
                    <FontAwesomeIcon icon={faArrowRight} className="d-inline-flex pt-1"/>
            </Card.Footer>
        </Card>

      )}
      }


export default TopCourse