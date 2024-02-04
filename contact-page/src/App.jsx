import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import NavigationHeader from "./Components/ContactHeader";
import ContactForm from "./Components/ContactForm";
import Button from "./Components/Button";
const App = () => {
  return (
    <div>
      <Navigation />
      <NavigationHeader />
      <ContactForm />
     
    </div>
  );
};

export default App;
