import React from 'react'
import india from "../assets/indiaa.png"
const About = () => {
  return (
         <div className="container mt-5  h-90vh position-static">
        <div className="row">
            <div className="col-md-8 w-60%">
                <h2>About Our News App</h2>
                <p>Welcome to India-yesterday, your trusted source for up-to-the-minute news and information from around the world. We are dedicated to keeping you informed, engaged, and connected to the events and stories that matter most to you.</p>
                <h2>Our Mission</h2>
                <p>At India-yesterday, our mission is to provide you with high-quality, accurate, and unbiased news content. We believe in the power of information and the role it plays in shaping our understanding of the world. Our goal is to empower you with the knowledge you need to make informed decisions, stay updated on current events, and stay connected to your community and the global community.</p>
                <h1>What Sets Us Apart</h1>
                <h2>Comprehensive Coverage</h2>
                <p>We cover a wide range of topics, from politics and business to entertainment and technology. Our team of experienced journalists and editors work tirelessly to bring you comprehensive and diverse news coverage.</p>
                <h2>Unbiased Reporting</h2>
<p>We take pride in our commitment to journalistic integrity. Our reporting is based on facts and presented without bias. We believe in the importance of delivering news that you can trust.</p>
<h2>User-Friendly Experience</h2>
<p>We've designed our app with your convenience in mind. Our user-friendly interface ensures that you can easily access news that interests you, customize your news feed, and share stories with friends and family</p>
<h2>Real-Time Updates</h2>
<p>Stay in the know with real-time updates. Receive breaking news alerts, live coverage, and exclusive stories as they happen, so you never miss a moment</p>
<h2>Meet Our Team</h2>
<p>Behind every article and update, there's a dedicated team of journalists, editors, and technologists working to bring you the news. Get to know the faces and names responsible for the stories that matter to you</p>
<h2>Contact Us</h2>
<p>Your feedback is valuable to us. If you have any questions, suggestions, or feedback, please don't hesitate to reach out to our support team at [contact email or phone number]. We are here to assist you and make your experience with India-yesterday as enjoyable as possible.
<br />
Thank you for choosing India-yesterday as your source for news and information. We appreciate your trust and look forward to keeping you informed and engaged.
<br />
Stay connected, stay informed!
<br />
Sincerely,
<br />
The India-yesterday Team</p>


            </div>
            <div className="col-md-4 float-end h-100%   w-30%">
                <img src={india} className="img-fluid float-end position-fixed h-50" alt="Company Image"/>
            </div>
        </div>
    </div>

  )
}

export default About
