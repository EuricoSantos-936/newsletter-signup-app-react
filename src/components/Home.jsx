import "../components/styles.css";
import Popup from "reactjs-popup";
import React, { useState } from 'react';

function Home() {

  const [email, setEmail] = useState(''); // State to track email input
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validity
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(true); // Reset validation when input changes
  };

  const handleSubscribeClick = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsPopupOpen(true); // Open popup when email is valid
 
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEmail('');
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
    return (
      <>
        <main className={`container ${isPopupOpen ? 'blur-background' : ''}`}>
            <div className='initialcontainer'>
              <div className='initialinformation'>
                  <div className='header'>
                    <h1>Stay Updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                  </div>
                  <div className='list'> 
                        <li>Product discovery and building waht matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                  </div>
                  <div className='form'>
                      <label className='emaillabel'>Email address</label>
                      <input className="inputemail" 
                      placeholder='email@company.com'
                      value={email}
                      onChange={handleEmailChange}>
                      </input>
                      {!isValidEmail && (
                        <label className='validemail' id='validemail'>Valid email required</label>
                      )}
                      <button
                        type='button'
                        className='btnsubmit'
                        onClick={handleSubscribeClick}
                      >
                        Subscribe to monthly newsletter
                      </button>
                          </div>
              </div>
              <div className='intialimage'>    
                      <img src='/src/assets/images/illustration-sign-up-desktop.svg' alt='illustration'/>
              </div>   
            </div>
            <Popup
              open={isPopupOpen} 
              closeOnDocumentClick
              onClose={() => setIsPopupOpen(false)}
              modal
              nested
            >
              <div className="successcontainer">
                <div>
                  <h1></h1>
                  <p>A confirmation emai has heen sent to {email} Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <button onClick={handleClosePopup}>Dismiss message</button>
              </div>
            </Popup>
        </main>
      </>
    )
  }
  
  export default Home
  