import React from "react"
import App from "../App.js"
import { Badge, Card} from "react-bootstrap"


class SingleBook extends React.Component {

	render = (props) => {
		return (
			<Card
				bg={this.props.isModalSelected ? "primary" : "light"}
			 
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Badge variant="success">{this.props.book.price} $$</Badge>
				</Card.Footer>
			</Card>
			
		)
	}
}

export default SingleBook
