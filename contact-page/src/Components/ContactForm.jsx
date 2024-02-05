import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name1, setName1] = useState("Enter name here");
  const [email, setEmail] = useState("Enter email here");
  const [text, setText] = useState("Enter text here");

  const notify = () => toast("Submitted Successfully");

  const onSubmit = (event) => {
    event.preventDefault();
    setName1(event.target.elements.name.value);
    setEmail(event.target.elements.email.value);
    setText(event.target.elements.textarea.value);

    console.log("name", name1);
    console.log("email", email);
    console.log("text", text);

    notify(); // Call the notify function here
  };

  return (
    <div className="contactFormContainer">
      <div className="form">
        <div className="buttonContainer">
          <Button
            onClick={notify}
            text="Via Support Chat"
            icon={<MdMessage fontSize={"24px "} />}
          />
          <Button
            onClick={notify}
            text="Via Call"
            icon={<FaPhone fontSize={"24px "} />}
          />
        </div>
        <div>
          <Button
            onClick={notify}
            className="btnSecondary"
            text="Via Email"
            icon={<IoMail fontSize={"24px"} />}
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="formControl">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder={name1} />
          </div>
          <div className="formControl">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder={email} />
          </div>
          <div className="formControl">
            <label htmlFor="textarea">Text</label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder={text}
            ></textarea>
          </div>

          <Button
            onClick={notify}
            type="submit"
            text="Submit"
            icon={<IoMail fontSize={"24px"} />}
          />

          <div>
            {name1 + "\u00A0\u00A0\u00A0" + email + "\u00A0\u00A0\u00A0" + text}
          </div>
        </form>
      </div>
      <div className="img">
        <img src="Images/contact.svg" alt="contact image" />
      </div>
      <div>
       
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
  