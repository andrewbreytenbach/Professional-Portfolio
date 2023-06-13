import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
