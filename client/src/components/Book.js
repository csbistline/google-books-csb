import React from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import Media from 'react-bootstrap/Media'


const Book = props => {
    return (
        <div className="p-3 m-2 bg-light shadow-sm rounded">
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
                            <Button variant="outline-secondary" size="sm" className="mr-1">View</Button>
                            <Button variant="outline-primary" size="sm">Save</Button>
                        </Col>
                    </Row>
                    <Row className="pl-3">
                        <p className="pr-3">By {props.authors}</p>
                        <p className="pr-3">{props.description}</p>
                        
                    </Row>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Book;