import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <div>
      <Container className="my-4">
        <Row className="g-4"> 
          <Col md={4}> 
            <Card style={{ width: '80%' }}> 
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Apa Itu React JS</Card.Title>
                <Card.Text>
                  React JS adalah pustaka JavaScript yang digunakan untuk membuat antarmuka pengguna (UI) yang interaktif dan dinamis untuk aplikasi web dan mobile
                </Card.Text>
                <Link to="/DisplayMateri">
                  <Button variant="primary" className='me-3'>Masuk</Button>
                  
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}> 
            <Card style={{ width: '80%' }}> 
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Cara Menggunakan React JS</Card.Title>
                <Card.Text>
                  React JS adalah pustaka JavaScript yang digunakan untuk membuat antarmuka pengguna (UI) yang interaktif dan dinamis untuk aplikasi web dan mobile
                </Card.Text>
                <Link to="/DisplayMateri">
                  <Button variant="primary" className='me-3'>Masuk</Button>
                  
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
