/** @format */

import React from "react";
import App from "../App.js";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBookAdvanced";
import Comments from "./Async";
import CommentArea from "./commentArea";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.BookList,
      queryL: 0,
      isModalOpen: false,
      book: false,
    };
  }

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { book } = this.state;
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
                };
              }
              const results = this.state.books.filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              );
              this.setState({
                books: results,
                queryL: event.target.value.length,
              });
            }}
          ></Form.Control>
        </Form>
        <Container>
        
          <Row>
           
            <Col>
              <Row>
                {this.state.books.map((book, index) => (
                  <Col
                    onClick={() => {
                      this.setState({ book });
                    }}
                    md={6}
                  >
                    <SingleBook
                      book={book}
                      onModalOpen={this.onModalOpen}
                      isModalOpen={this.state.isModalOpen}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
			<Col>
			{book ? <Comments book={book} />:<p>Click  any book to see  comments</p>}
			</Col>
          </Row>
        </Container>

    
      </>
    );
  }
}

export default BookList;
