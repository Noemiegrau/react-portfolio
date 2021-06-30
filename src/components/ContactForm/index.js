import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  
  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
 
    return (
        <section id="container-contactme" >

          <form id="contact-form" onSubmit={handleSubmit}>
          <section>
            <h1 id="contact-me"><i>Contact Me</i></h1>
          </section>
            <div className="form-content">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="Enter your name" defaultValue={name} onBlur={handleChange} />
              <br />
              </div>
            <div className="form-content">
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" placeholder="Enter your email address" defaultValue={email} onBlur={handleChange} />
              <br />
              </div>
            <div className="form-content">
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" placeholder="Enter your message" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div className="form-content">
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
             <br />
            <button type="submit">Submit</button>
          </form>
        </section>
        );
      
}
    
export default ContactForm;
    