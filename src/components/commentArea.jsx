import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class CommentForm extends React.Component {
    state = {
        comments: {
            author: '',
            comment: '',
            updatedAt: '',
        },
        errMessage: '',
        loading: false
    }


    submitComment = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comments),
                    headers: new Headers({ "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzAxZTk4MzViMDAwMTc1ODRlZjAiLCJpYXQiOjE2MDU3OTE3NzQsImV4cCI6MTYwNzAwMTM3NH0.-0vWsUEx5v-kF_LhWXdQJ_eFcmASdAyALwPqcgnFYe8",
                        "Content-Type": "application/json"
                    })
                })
        } catch (e) {
            console.log(e) // Error
            this.setState({
                errMessage: e.message,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div>
               
                {/* {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Posting your comment, please wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                } */}
                <Form className="w-100 mb-5" onSubmit={this.submitComment}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="name">name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                   
                                    value={this.state.comments.author}
                                    onChange={this.updateCommentField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">comment</Form.Label>
                                <Form.Control
                                    type="text"
                                    author="comment"
                                    id="comment"
                                    
                                    value={this.state.comments.comment}
                                    onChange={this.updateCommentField}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Post</Button>
                </Form>
            </div>
        )
    }
}
export default CommentForm 