import React from "react";
import "./ContactDetails.css";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { myDetails, socialMediaData } from "../../../../Constants";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { IsDesktop } from "../../../../Utils/CssUtils";

const ContactDetails = () => {
  const isDektop = IsDesktop();
  return (
    <div className="contact-container">
      <div className="divider" />
      <div className="detail-container">
        <div className="detail-item">
          <div className="contact-icon">
            <CiMail className="icon" />
          </div>
          <div>
            <p className="contact-txt">Email</p>
            <a className="contact-link" href={`mailto:${myDetails.email}`}>
              {myDetails.email}
            </a>
          </div>
        </div>
        <div className="detail-item">
          <div className="contact-icon">
            <CiMobile1 className="icon" />
          </div>
          <div>
            <p className="contact-txt">Phone</p>
            <a
              className="contact-link"
              href={`tel:${myDetails.dailCode}${myDetails.phone}`}
            >
              {myDetails.phone}
            </a>
          </div>
        </div>
      </div>
      {!isDektop && <div className="divider" />}
      <div className="social-media">
        {socialMediaData.map((item, i) => (
          <SocialMediaLinks data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
