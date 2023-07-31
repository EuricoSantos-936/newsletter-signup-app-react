import {Container, Row, Col}from 'react-bootstrap';

function Home() {

    return (
      <>
        <Container>
            <Col>
            <Row md={5}>
                <h1>Stay Updated</h1>
            </Row>
            </Col>
            <Col>
            <Row md={5}>
            <h1>Image</h1>
            </Row>
            </Col>
        </Container>
      </>
    )
  }
  
  export default Home
  