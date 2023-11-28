import React from 'react'
import india from "../assets/indiaa.png"
const Contact = () => {
  return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 h-full">
        <img src={india} className="img-fluid h-40" alt="Company Image"/>
            <div className='mt-5'>
            <h2>Contact Information</h2>
            <p>Feel free to get in touch with us using the contact information below:</p>
            <ul>
                <li><strong>Email:</strong> indiayesterday@gmail.com</li>
                <li><strong>Phone:</strong> +91 1234567890</li>
                <li><strong>Address:</strong> 123 Main Street, Indore, India</li>
            </ul>
            </div>
        </div>
        <div className="col-md-6 bg-dark">
            <h2 className='text-light'>Connect with us</h2>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    </div>
</div>


  )
}

export default Contact
