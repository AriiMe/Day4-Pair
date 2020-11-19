import React from "react"
import App from "../App.js"
import { Badge, Card, Modal } from "react-bootstrap"
import Comments from './Async'
import CommentForm from './commentArea'

class SingleBook extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selected: false }
	}
	render = (props) => {
		return (
			<Card
				bg={this.state.selected ? "primary" : "light"}
				onClick={() => {
					this.setState({ selected: !this.state.selected })
				}}
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Badge variant="success">{this.props.book.price} $$</Badge>
				</Card.Footer>
			<Modal show={this.state.selected} ><Comments></Comments><CommentForm></CommentForm></Modal>
			
			</Card>
		)
	}
}

export default SingleBook
