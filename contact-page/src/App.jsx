import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import NavigationHeader from "./Components/ContactHeader";
import ContactForm from "./Components/ContactForm";
import Button from "./Components/Button";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <div>
      <Navigation />
      <NavigationHeader />
      <ContactForm />
      <ToastContainer />
    </div>
  );
};

export default App;
