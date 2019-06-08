import React from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import Media from 'react-bootstrap/Media'


const Book = props => {
    return (
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
                    <Col sm={3}>
                        <Button className="mr-1 ml-auto">View</Button>
                        <Button>Save</Button>
                    </Col>
                </Row>
                <Row className="pl-3">
                    <p>By {props.authors}</p>
                    <p>{props.description}</p>
                    <hr />
                </Row>
            </Media.Body>
        </Media>
    );
};

export default Book;