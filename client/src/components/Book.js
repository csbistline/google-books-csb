import React from 'react';
import { Col, Row } from "react-bootstrap";
import Media from 'react-bootstrap/Media'
import API from "../utils/GoogleBooksAPI"


const Book = props => {

    return (
        <div className="p-3 mb-3 bg-light shadow rounded">
            <Media className="my-2">
                <img
                    width={100}
                    src={props.image}
                    alt={props.title}
                />
                <Media.Body
                    className="ml-3"
                >
                    <Row>
                        <Col sm={9}>
                            <h5>{props.title}</h5>
                        </Col>
                        <Col sm={3} className="d-flex justify-content-end">
                            <a 
                                href={props.link} 
                                data-id={props.id} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-sm btn-outline-secondary mr-1">
                            View
                            </a>

                            <button 
                                className="btn btn-outline-primary btn-sm" 
                                data-id={props.id} 
                                onClick={() => {
                                    console.log(props.id)
                                    API.saveBook({
                                        googleId: props.id,
                                        title: props.title,
                                        authors: props.authors,
                                        description: props.description,
                                        link: props.link,
                                        image: props.image
                                    })
                                }}>
                            Save
                            </button>
                        </Col>
                    </Row>
                    <Row className="pl-3">
                        <p className="pr-3">Author(s): {props.authors.join(", ")}</p>
                        <p className="pr-3">{props.description}</p>
                    </Row>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Book;