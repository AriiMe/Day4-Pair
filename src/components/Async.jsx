import React from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'

class Comments extends React.Component {

    state = {
        comments: [],
        loading: true
    }

    // componentWillUnmount fires an instant before unmounting

    //lifecycle method that is going to be triggered just once after initial loading
    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzAxZTk4MzViMDAwMTc1ODRlZjAiLCJpYXQiOjE2MDU3OTE3NzQsImV4cCI6MTYwNzAwMTM3NH0.-0vWsUEx5v-kF_LhWXdQJ_eFcmASdAyALwPqcgnFYe8"
                }
                })
            let comments = await response.json()
            this.setState({ comments: comments, loading: false })
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }


    render() {

        console.log('IN THE RENDER METHOD')

        return (
            <div className="mb-5">
                <h2>Comments</h2>
                {
                    this.state.loading && (
                        <div className="font-bold d-flex justify-content-center">
                            <span>Feching comments</span>
                            <Spinner animation="border" variant="success" />
                        </div>
                    )
                }
                {this.state.comments.map((comments, index) => (
                    <ListGroup key={index}>
                        <ListGroup.Item>
                            Name: {comments.author}, Message: {comments.comment},
                            at {comments.updatedAt}
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        )
    }
}

export default Comments