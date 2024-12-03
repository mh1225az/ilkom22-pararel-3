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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, beatae!
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
    
  );
};

export default Home;
