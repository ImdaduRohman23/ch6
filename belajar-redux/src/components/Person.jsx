import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

const Person = ({name, addres, phoneNumber, photo}) => {
  return (
    <Card className='container-fluid p-4 text-center'>
      <Card.Img  variant='top' src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <Row className='my-2'>
            <Col>
              {addres}, {phoneNumber}
            </Col>
          </Row>
        </Card.Text>
        <Button>Klik</Button>
      </Card.Body>
    </Card>
  )
}


export default Person
