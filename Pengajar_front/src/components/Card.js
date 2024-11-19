import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ width: '200px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
