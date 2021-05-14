import React from 'react';
import './contact.css';

const Contact = () => (
  <form class="form">
    <h2>Let's Connect</h2>
    <p type="Name:">
      <label  />
      <input placeholder="Write your name here.."></input>
    </p>
    <p type="Email:">
      <input placeholder="Provide your email"></input>
    </p>
    <p type="Message:">
      <input placeholder="Your message"></input>
    </p>
    <button className="button ">Send Message</button>
    <div className='det'>
      <span class="fa fa-phone"></span>000 0000 000
      <span class="fa fa-envelope-o"></span> xxx@rexora.com
    </div>
  </form>
)
export default Contact;

