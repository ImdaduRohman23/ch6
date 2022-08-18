import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CardComponent = (props) => {
    const {imdadu, desc, handeTekan} = props;
    return (
            <Col>
                <Card border='info'>
                    <h1>{imdadu}</h1>
                    <hr />
                    <div>{desc}</div>
                    <button onClick={handeTekan}>Klik Me</button>
                </Card>
            </Col>
    )
}

export default CardComponent