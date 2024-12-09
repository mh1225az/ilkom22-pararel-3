import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/classes') // Pastikan URL sesuai dengan backend
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(err => console.error('Error fetching classes:', err));
  }, []);
  return (
    <div>
      <Container className="my-4">
        <Row className="g-4"> 
          <Col md={4}> 
            <Card style={{ width: '80%' }}> 
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>React JS</Card.Title>
                <Card.Text>
                  React JS adalah pustaka JavaScript yang digunakan untuk membuat antarmuka pengguna (UI) yang interaktif dan dinamis untuk aplikasi web dan mobile
                </Card.Text>
                <Link to="/DisplayMateri">
                  <Button variant="primary">Daftar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '80%' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Laravel 11</Card.Title>
                <Card.Text>
                  Laravel adalah framework PHP yang populer dan banyak digunakan oleh pengembang web untuk membuat aplikasi web
                </Card.Text>
                <Link to="/DisplayMateri">
                  <Button variant="primary">Daftar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '80%' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  HTML (Hypertext Markup Language) adalah bahasa pemrograman yang digunakan untuk membuat halaman web dan aplikasi web
                </Card.Text>
                <Link to="/DisplayMateri">
                  <Button variant="primary">Daftar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
