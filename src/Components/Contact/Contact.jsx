import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

 const onSubmit = async (event) => {
   event.preventDefault();
   const formData = new FormData(event.target);

   formData.append("access_key", "d09c406d-2867-4014-bbe9-4596507a6228");

   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);

   const res = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: json,
   }).then((res) => res.json());

   if (res.success) {
     alert(res.message);
   }
 };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>
            Thank you for visiting my portfolio! I'm always eager to connect
            with fellow developers, potential collaborators, and anyone
            interested in my work. Whether you have questions about my projects,
            want to discuss potential opportunities, or just want to share
            ideas, feel free to reach out. I value every connection and look
            forward to hearing from you. Please fill out the contact form below
            or connect with me on my social media platforms, and I’ll get back
            to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a
                href="mailto:rupeshpatil1702@gmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>rupeshpatil1702@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <a
                href="tel:+918624953690"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>+91-8624953690</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <a
                href="https://www.google.com/maps/place/Pune,+Maharashtra/@18.5248706,73.6981531,50315m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>Pune, MH, India</p>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />

          <label htmlFor="">Feedback</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
