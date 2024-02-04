import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <div className="form">
        contact form here

        <div className="buttonContainer">
        <Button
          text="Via Support Chat"
          icon={<MdMessage fontSize={"24px "} />}
        />
        <Button text="Via Call" icon={<FaPhone fontSize={"24px "} />} />


        </div>
        <div className="btnSecondary">
          <Button text="Via Email" 
          icon={<IoMail fontSize={"24px"}/>
        }/>
        </div>
      </div>
      <div className="img">img here</div>
    </div>
  );
};

export default ContactForm;
