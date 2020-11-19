import React from "react"
import App from "../App.js"
import { Container, Row, Col, Form, Modal } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import SingleBook from "./SingleBookAdvanced"
import Comments from './Async'
import CommentForm from './commentArea'

class BookList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { books: props.BookList, queryL: 0, isModalOpen: false }
	}

	onModalOpen = () => {
		this.setState({isModalOpen: true})
	}

	onModalClose = () => {
		this.setState({isModalOpen: false})
	}

	render = (props) => {
		return (
			<>
				<Form>
					<Form.Control
						type="text"
						onChange={(event) => {
							if (event.target.value.length < this.state.queryL) {
								this.state = {
									books: this.props.BookList,
									queryL: event.target.value.length,
								}
							}
							const results = this.state.books.filter((book) =>
								book.title
									.toLowerCase()
									.includes(event.target.value.toLowerCase())
							)
							this.setState({
								books: results,
								queryL: event.target.value.length,
							})
						}}
					></Form.Control>
				</Form>
				<Container>
					<Row>
						{this.state.books.map((book, index) => (
							<Col md={4}>
								<SingleBook book={book} onModalOpen={this.onModalOpen} isModalOpen={this.state.isModalOpen} />

							</Col>
						))}
					</Row>
				</Container>
				<Modal show={this.state.isModalOpen} onHide={this.onModalClose}><Comments></Comments><CommentForm></CommentForm></Modal>
			</>
		)
	}
}

export default BookList
