import {Card, CardGroup, Container} from "react-bootstrap"

const AboutUs = () => {
  return (
    <>
    <Container className="mt-3">
    <CardGroup>
    <Card className="mx-2" style={{ width: '18rem' }}>
      <Card.Img variant="left" src="src/assets/images/tarjeta1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="mx-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/tarjeta1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="mx-2
    " style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/images/tarjeta1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    </CardGroup>


    </Container>
    

   
    </>
  )
}

export default AboutUs