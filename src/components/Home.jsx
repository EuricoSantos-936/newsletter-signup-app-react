import {Container, Row, Col}from 'react-bootstrap';
import "../components/styles.css";

function Home() {

    return (
      <>
        <main className='container'>
            <div className='initialcontainer'>
              <div className='initialinformation'>
                  <div className='header'>
                    <h1>Stay Updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                  </div>
                  <div className='list'>
                    <ul>
                        <li>Product discovery and building waht matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                  </div>
                  <div className='form'>
                      <label className='emaillabel'>Email address</label>
                      <input className="inputemail" placeholder='email@company.com'></input>
                      <label className='emailadresscheck'>Valid email required</label>
                      <button type="submit" className='btnsubmit'>Subcribe to monthly newsletter</button>
                  </div>
              </div>
              <div className='intialimage'>    
                      <img src='/src/assets/images/illustration-sign-up-desktop.svg' alt='illustration'/>
              </div>   
            </div>
        </main>
      </>
    )
  }
  
  export default Home
  