import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import API from "../utils/GoogleBooksAPI"
import Book from '../components/Book';


class Search extends Component {
    state = {
        books: [],
        query: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.query) {
            API.searchGoogle(this.state.query)
                .then(res => {
                    console.log(res.data.items);
                    this.setState({ books: res.data.items })
                })
                // .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">

                        <Form>
                            <Form.Group controlId="formGroupBook">
                                <Form.Label className="h3">Book search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Book title, author or subject"
                                    value={this.state.query}
                                    name="query"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={!(this.state.query)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col size="md-12">
                        {this.state.books.length ? (
                            <div>
                                <h5>Search Results</h5>
                                {this.state.books.map(book => (

                                    <Book
                                        key={book.id}
                                        id={book.id}
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        link={book.volumeInfo.infoLink}
                                        image=
                                        {
                                            book.volumeInfo.imageLinks ?
                                                book.volumeInfo.imageLinks.thumbnail :
                                                "https://via.placeholder.com/100x150?text=image"
                                        }

                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No Results to Display</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;


