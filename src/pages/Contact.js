import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="maxContainer contact">
      <h1>Contact</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <h5>Quick contact details</h5>

          <div className="buttonContainer">
            <span class="material-icons-outlined">call</span>
            <p>+3620/333-5011</p>
          </div>
          <div className="buttonContainer">
            <span class="material-icons-outlined">mail</span>
            <p>dora.kelemen@icloud.com</p>
          </div>
          <div className="buttonContainer">
            <span class="material-icons-outlined">near_me</span>
            <p>Budapest XI.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
