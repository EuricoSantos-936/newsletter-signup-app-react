import {Container, Row, Col}from 'react-bootstrap';
import "../components/styles.css";

function Home() {

    return (
      <>
        <Container  className='container'>
            <Row className='newscontainer'>
            <Col md={6} className='newsdescription'>
                <h1>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building waht matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <br />
                    <label className='emaillabel'>Email address</label>
                    <label className='emailadresscheck'>Valid email required</label>
                    <br />
                    <input className="inputemail" placeholder='email@company.com'></input>
                    <br />
                    
                    <button type="submit" className='btnsubmit'>Subcribe to monthly newsletter</button>
            </Col>
            <Col md={6} className='newsimage'>    
                
                    <img src='/src/assets/images/illustration-sign-up-desktop.svg' alt='illustration'/>
            </Col>   
            </Row>
        </Container>
      </>
    )
  }
  
  export default Home
  