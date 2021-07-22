import React, { Component, } from 'react';

import { Card, Button, ListGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'

// import DefaultProfile from "../assets/default_profile.jpeg"
import MiniVideoCard from "./mini-video-card"

import LinkHead from "../assets/linkedHead.png"


class HomeProf extends Component {

    state = {
        profile: "",
    }



    render() {

        // if seemore true map 12 if see more false map 6
      return (
                <Card fluid="true" className="d-flex px-0 border-0">
                <Card.Img fluid="true" variant="top" src={LinkHead} style={{ borderRadius: "10px 10px 0px 0px"}} />
                <img src={this.props.profile?.image} 
                className="rounded-circle mx-auto border border-white" style={{ height: "80px", width: "80px", position: "relative", bottom: "40px" }} 
                // {this.props.profImg}
                />
                <Card.Body className="px-0 py-0">
                <Card.Title className="d-flex justify-content-center mb-0" style={{fontSize: '15px', fontWeight: 'bold', position: "relative", bottom: "15px" }}>Welcome, {this.props.profile?.name}!</Card.Title>
                <Card.Text className="d-flex justify-content-center">
                    Add a photo
                </Card.Text>

                <ListGroup>
                    <ListGroup.Item className="d-flex px-0 justify-content-between py-0 pt-3 border-top px-3 rounded-0">
                        
                        <p className="d-inline-flex mb-0 text-secondary" style={{fontSize: '12px',}} >Connections</p> 
                        <FontAwesomeIcon className="d-inline-flex align-self-center" icon={faUserPlus} style={{fontSize: '12px',}}/>

                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex px-0 py-0 pb-3 border-bottom rounded-0">
                        
                        
                        <p className="d-flex container-fluid mb-0" style={{fontSize: '12px',}}>Grow your network</p>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex px-0 py-0 py-0 pt-3 border-top px-3 rounded-0 pb-0" style={{fontSize: '12px',}}>
                        <p className="mb-0">Access exclusive tools & insights</p>
                        
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex px-3 py-0 py-0 pb-3 border-bottom rounded-0 pt-0" style={{fontSize: '12px',}}>
                        
                        <p className="mb-0">Try premium for free</p>
                    </ListGroup.Item>
                
                </ListGroup>
                <Card.Footer className="text-justify align-items-center py-3" style={{fontSize: '18px', fontWeight: 'bold' }}>
                <FontAwesomeIcon className="d-inline-flex align-items-center" icon={faBookmark} style={{fontSize: '14px',}}/>
                        <p className="d-inline-flex mb-0 px-2">My items</p>
            </Card.Footer>
                
                </Card.Body>
            </Card>
        // <Card fluid="true" className="d-flex">
        //     <Card.Img variant="top" flush src={"https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"} style={{ borderRadius: "10px 0px 10px 0px" }}/>

        //     <Card.Footer className="text-center align-items-center py-3" style={{fontSize: '18px', fontWeight: 'bold' }}>
        //             <p className="d-inline-flex mb-0 px-2" onClick={this.handleMore}>Show more on LinkedIn Learning</p>
        //     </Card.Footer>
        // </Card>

      )}
      }


export default HomeProf