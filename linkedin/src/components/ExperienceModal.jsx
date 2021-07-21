import { Component } from 'react'
import { Form, Button, Modal, Col, Image } from 'react-bootstrap'

class ExperienceModal extends Component {
    state = {
        experience: {},
    }

    componentDidMount = () => {
        this.setState({
            experience: {
                _id: this.props.experience._id,
                role: this.props.experience.role,
                company: this.props.experience.company,
                startDate: this.props.experience.startDate.slice(0,10),
                endDate: this.props.experience.endDate ? this.props.experience.endDate.slice(0,10) : '',
                description: this.props.experience.description,
                area: this.props.experience.area,
                // image: this.props.experience.image ? this.props.experience.image : '',
            } 
        })
    }

    inputChange = (e) => {
        this.setState({
            experience: {
                ...this.state.experience,
                [e.target.id]: e.target.value
            }
        })
    }

    editExperience = async (e) => {
        e.preventDefault() 

        const userId = this.props.userId
        const expId = this.state.experience._id
        const apiURL = process.env.REACT_APP_BE_URL
        // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const response = await fetch(
                `${apiURL}/profile/${userId}/experiences/${expId}`,
                // `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, 
                {
                method: 'PUT',
                body: JSON.stringify(this.state.experience),
                headers: {
                    // "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            if(response.ok) {
                // const data = await response.json()
                // console.log(data)
                this.props.fetchExperiences()
                this.props.onHide()
            } else {
                console.log('we had a problem')
            }
        } catch (err) {
            console.log(err)
        }
    }

    deleteExperience = async (e) => {
        e.preventDefault() 

        const userId = this.props.userId
        const expId = this.state.experience._id
        const apiURL = process.env.REACT_APP_BE_URL
        // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const response = await fetch(
                `${apiURL}/profile/${userId}/experiences/${expId}`,
                // `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, 
                {
                method: 'DELETE',
                // headers: {
                //     "Authorization": `Bearer ${apiToken}`,
                // }
            })
            if(response.ok) {
                // const data = await response.json()
                // console.log(data)
                this.props.fetchExperiences()
                this.props.onHide()
            } else {
                console.log('we had a problem')
            }
        } catch (err) {
            console.log(err)
        }
    }

    editPicture = async (e) => {

        const userId = this.props.userId
        const expId = this.state.experience._id
        const apiURL = process.env.REACT_APP_BE_URL
        console.log(userId)
        console.log(expId)
        
        const newLogo = new FormData()
        newLogo.append('image', e.target.files[0])
        // newLogo.append('experience', e.target.files[0])

        // console.log(e.target.files[0])
        // console.log(newLogo)
    
        // const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4OTcxNmMxOTMwNTAwMTU4NzE1NDYiLCJpYXQiOjE2MjM3NTg2MTQsImV4cCI6MTYyNDk2ODIxNH0.a8nHWd_m6aYBbyPS4CFTexm_WJ0_K-ZBPC_4QapdJ8c'
        try {
            const response = await fetch(
                `${apiURL}/profile/${userId}/experiences/${expId}/picture`,
                // `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`, 
                {
                method: 'POST',
                body: newLogo,
                // headers: {
                //     "Authorization": `Bearer ${apiToken}`,
                // }
            })
            if(response.ok) {
                console.log(response)
                // setShow(false)
            } else {
                console.log('we had a problem')
            }
        } catch (err) {
            console.log(err)
        }
    }
        
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form onSubmit={this.editExperience}>
                    <Form.Group>
                        <Form.Label className="text-muted">Title</Form.Label>
                        <Form.Control id='role' type="text" placeholder="Enter your Title" value={this.state.experience.role} onChange={(e) => this.inputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-muted">Company</Form.Label>
                        <Form.Control id='company' type="text" placeholder="Enter Company name" value={this.state.experience.company} onChange={(e) => this.inputChange(e)} />
                    </Form.Group>
                    
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Start Date</Form.Label>
                            <Form.Control id='startDate' type="date" value={this.state.experience.startDate} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">End Date</Form.Label>
                            <Form.Control id='endDate' type="date" value={this.state.experience.endDate ? this.state.experience.endDate : ''} onChange={(e) => this.inputChange(e)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group >
                        <Form.Label className='text-mutted' size="sm"> Description</Form.Label>
                        <Form.Control
                            id='description'
                            as="textarea" rows={3}
                            value={this.state.experience.description}
                            onChange={(e) => this.inputChange(e)}
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} className='m-3'>
                            <Image src={this.props.experience.image ? this.props.experience.image : ''} rounded fluid style={{ width: 100, height: 100 }} />
                        </Form.Group>
                        <Form.Group as={Col} className='my-3'>
                            <Form.Label className='text-mutted mb-3' size="sm"> Upload New Company Logo</Form.Label>
                            <Form.File id="image" onChange={(e) => this.editPicture(e)}/>
                        </Form.Group >
                    </Form.Row>

                    <Button className='mt-3' variant="primary" type="submit" onClick={this.editExperience}>
                        Update
                    </Button>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                    <Button variant="primary" onClick={this.deleteExperience}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExperienceModal;