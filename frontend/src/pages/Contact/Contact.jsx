import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <div className='contact-info'>
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div className='contact-details'>
            <div className='contact-item'>
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Food Street, Cuisine City, FC 12345</p>
            </div>
            <div className='contact-item'>
              <i className="fas fa-phone"></i>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className='contact-item'>
              <i className="fas fa-envelope"></i>
              <p>support@fooddelivery.com</p>
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <form>
            <div className='form-group'>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className='form-group'>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className='form-group'>
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact 