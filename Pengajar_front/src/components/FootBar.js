import React from 'react';
import { Container } from 'react-bootstrap';
import './FootBar.css'; 

const FootBar = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <Container>
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default FootBar;
