import React from 'react';
import { Card } from 'react-bootstrap';

export default function GitHubCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.userPhoto} alt="User photo" />
            <Card.Body>
                <Card.Title>{props.username}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
