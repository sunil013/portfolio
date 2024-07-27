import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="content-body">
      <h2 className="content-head">Contact</h2>
      <p className="contact-me-txt">
        I am open to work. Thank you for your interest in getting in touch with
        me. I welcome your feedback, questions, and suggestions. If you have a
        specific question or comment, please feel free to email me directly at{" "}
        <a
          className="contact-email-link"
          href="mailto:sunildevabathula013@gmail.com"
        >
          sunildevabathula013@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
