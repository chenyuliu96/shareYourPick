import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

const OrderHistoryCard = ({ pictures, id }) => {

    const displayedPictures = pictures.slice(0, 4);
    const history = useHistory();

    const handleRedirect = (id) => {
        history.push(`/ShareYourPick/${id}`);
    };
    return (
        <Card>
            <Card.Body>
                <Row>
                    {displayedPictures.map((picture) => (
                        <Col md={3} key={picture.id}>
                            <img src={picture.url}
                                 alt={picture.title}
                                 style={{ height: '200px' }} // Set the desired height here
                            />
                        </Col>
                    ))}
                    <Row md={4}>
                        <button className="btn btn-warning" type="button" onClick={() => handleRedirect(id)}>ShareYourPick</button>
                    </Row>
                    <Row md={4}>
                        <button className="btn btn-light" type="button" >Track Package</button>
                    </Row>
                    <Row md={4}>
                        <button className="btn btn-light" type="button">Write A Product Review</button>
                    </Row>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderHistoryCard;