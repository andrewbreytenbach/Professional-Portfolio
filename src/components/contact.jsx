import React from 'react';

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <br></br>
    <h2>Contact</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" required />
      <br></br>
      <label for="email">Email:</label>
      <input type="email" id="email" required />
      <br></br>
      <label for="message">Message:</label>
      <textarea id="message" required></textarea>
      <br></br>
      <button type="submit">Send Message</button>
    </form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
  </section>
    );
};

export default Contact;