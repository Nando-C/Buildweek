import { Component } from 'react'
import { Col, Modal, Card, Button, Form, } from 'react-bootstrap'
import ExperienceList from './ExperienceList'

class Experience extends Component {
    state = {
        experiences: [],
        newExperience: {},
        show: false,
        // expand: false,
    }

    inputChange = (e) => {
        this.setState({
            // ...this.state,
            newExperience: {
                ...this.state.newExperience,
                [e.target.id]: e.target.value
            }
        })
    }

    fetchExperiences = async (props) => {
        const userId = this.props.match.params.userId
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const apiURL = process.env.REACT_APP_BE_URL
            const response = await fetch(
                `${apiURL}/profile/${userId}/experiences`,
                // `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, 
                // {
                // headers: {
                //     "Authorization": `Bearer ${apiToken}`,
                // }
            // }
            )
            const data = await response.json()
            console.log(data)
            this.setState({
                ...this.state,
                experiences: data
            })
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount = async (props) => {
        this.fetchExperiences()
    }

    componentDidUpdate = async (prevProps, prepState) => {
        if(prevProps.match.params.userId !== this.props.match.params.userId){
            this.fetchExperiences()
        }
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    // handleExpand = () => {
    //     console.log('expand')
    //     this.setState({
    //         ...this.state,
    //         expand: true
    //     })
    // }

    addExperience = async (e) => {
        e.preventDefault() 

        console.log(this.state.newExperience)
        const userId = this.props.match.params.userId
        // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const apiURL = process.env.REACT_APP_BE_URL
            const response = await fetch(
                `${apiURL}/profile/${userId}/experiences`,
                // `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, 
                {
                method: 'POST',
                body: JSON.stringify(this.state.newExperience),
                headers: {
                    // "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({
                    newExperience: {
                        area: "",
                        company: "",
                        description: "",
                        endDate: "",
                        role: "",
                        startDate: "",
                    },
                })
                this.fetchExperiences()
            } else {
                console.log('we had a problem')
            }
           
        } catch (err) {
            console.log(err)
        }
    }

   

    render() {
        return (
            <>
                {/* <Row>
                <Col md={8}> */}
                <Card >
                    <div className='d-flex justify-content-between p-3'>
                        <h4 className='font-weight-normal'>Experience</h4>
                        <div className="ml-auto" onClick={this.handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                            </svg>
                        </div>
                    </div>
                    {this.state.experiences.map(experience => (
                        <ExperienceList userId={this.props.match.params.userId} experience={experience} fetchExperiences={this.fetchExperiences} handleExpand={this.handleExpand} expand={this.state.expand} />
                    ))}
                </Card>
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form onSubmit={this.addExperience}>
                        <Form.Group>
                            <Form.Label className="text-muted">Title</Form.Label>
                            <Form.Control id='role' type="text" placeholder="Enter your Title" value={this.state.newExperience.role} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-muted">Company</Form.Label>
                            <Form.Control id='company' type="text" placeholder="Enter Company name" value={this.state.newExperience.company} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-muted">Area</Form.Label>
                            <Form.Control id='area' type="text" placeholder="Enter City/Area" value={this.state.newExperience.area} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label className="text-muted">Start Date</Form.Label>
                                <Form.Control id='startDate' type="date" value={this.state.newExperience.startDate} onChange={(e) => this.inputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className="text-muted">End Date</Form.Label>
                                <Form.Control id='endDate' type="date" value={this.state.newExperience.endDate ? this.state.newExperience.endDate : ''} onChange={(e) => this.inputChange(e)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group >
                            <Form.Label className='text-mutted' size="sm"> Description</Form.Label>
                            <Form.Control
                                id='description'
                                as="textarea" rows={3}
                                value={this.state.newExperience.description}
                                onChange={(e) => this.inputChange(e)}
                            />
                        </Form.Group>

                        <Button className='mt-3' variant="primary" type="submit" >
                            Add Experience
                        </Button>
                    </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="submit" onClick={this.handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" type="submit" onClick={this.addExperience}>
                            Add Experience
                        </Button> */}
                    </Modal.Footer>
                </Modal>
                {/* </Col>
                </Row> */}
            </>
        );
    }
}

export default Experience;