import React from 'react';
import {Button, Card, Container } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <Container  className='card1 flex-grow-1 my-4'style={{ marginTop: '20px' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>React JS</Card.Title>
            <Card.Text>
            React JS adalah pustaka JavaScript yang digunakan untuk membuat antarmuka pengguna (UI) yang interaktif dan dinamis untuk aplikasi web dan mobile
            </Card.Text>
            <Button className="me-2" variant="primary">Masuk</Button>
            <Button  variant="secondary">Edit</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
    
  );
};

export default Home;
