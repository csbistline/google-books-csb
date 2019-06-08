import React from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import Media from 'react-bootstrap/Media'


const Book = props => {
    return (
            <Media className="my-2">
                <img
                    width={100}
                    className="mr-3"
                    src={props.image}
                    alt={props.title}
                />
                <Media.Body>
                    <h5>{props.title}</h5>
                    <p>By {props.authors}</p>
                    <p>{props.description}</p>
                </Media.Body>
            </Media>
    );
};

export default Book;