import React, { Component, } from 'react';

import { Card, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faChevronDown, faChevronUp, faCircle  } from "@fortawesome/free-solid-svg-icons";

// import DefaultProfile from "../assets/default_profile.jpeg"
// import MiniProfileCard from "./profile-card"

// import { withRouter, Link } from "react-router-dom";

class LinkLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seeMore: false
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleMore = this.handleMore.bind(this);
      }

      handleMore() {
        this.setState(prevState => ({
            seeMore: !prevState.seeMore
          }));
      }



    
    render() {

        let cardDisplay 
        let footText
        let iconArrow

        this.state.seeMore === false ? (cardDisplay = "none") && (footText = "Show more") && (iconArrow = faChevronDown) : (cardDisplay = "block") && (footText = "Show less") && (iconArrow = faChevronUp)

      return (
        <Card fluid="true" className="d-flex px-0">
            <Card.Header style={{fontSize: '20px', fontWeight: 'bold' }} className="d-inline-flex bg-white border-bottom-0 mt-2 justify-content-between">                  
                <p className="mb-0 d-inline-flex my-auto ms-0">LinkedIn News</p>
                  <div className="d-flex bg-dark rounded align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
                      <FontAwesomeIcon icon={faInfo} className="d-flex my-auto me-0 text-white fa-xs"/>
                    </div>
            </Card.Header>
            <Card.Body className="ps-3 pb-0 mb-0 pt-0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Firms welcome rent moratorium news</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>14h ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>492 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Oxford Circus to become a Piazza</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>21h ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px"}} className="d-flex text-secondary mx-2"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>17,672 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Are tattoos still taboo at worK?</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>11,260 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">'I had no idea how to get promoted'</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>3d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>74,050 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Renting cheaper than buying UK</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>3d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>26,358 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    
                </ul>
            </Card.Body>
            <Card.Body className="ps-3 pb-0 mb-0 pt-0" style={{ display: cardDisplay }}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Firms welcome rent moratorium news</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>14h ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>492 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex mb-0">Euro 2020 stars 'snub' sponsors</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px"}} className="d-flex text-secondary mx-2"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>7,644 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Legal action taken over travel list</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>3h ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1,260 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Web source code for sale as NFT</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1,376 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    <li class="list-group-item d-flex px-0">
                        <Container fluid className="px-0">
                            <div className="d-inline-flex mt-1 pt-1 px-0">
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "7px"}} className="d-flex mt-2 mr-3"/>
                                <Card.Title style={{ fontSize: "16px"}} className="d-flex">Womens careers are 'held back' by men</Card.Title>
                            </div>
                            <div className="d-flex ml-4">
                                <Card.Text className="d-inline-flex  align-items-center">
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>1d ago</p> 
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "6px"}} className="d-flex mx-2 text-secondary"/> 
                                    <p className="d-flex mb-0 text-secondary" style={{ fontSize: "12px"}}>3,330 readers</p>
                                </Card.Text>
                         </div>
                        </Container>
                    </li>
                    
                </ul>
            </Card.Body>
            

            <Card.Footer className="align-items-center py-3 pl-2" style={{fontSize: '18px', fontWeight: 'bold' }}>
                    <p className="d-inline-flex mb-0 px-2 ms-3" onClick={this.handleMore}>{footText}</p>
                    <FontAwesomeIcon icon={iconArrow} className="d-inline-flex pt-1"/>
            </Card.Footer>
        </Card>

      )}
      }


export default LinkLearn