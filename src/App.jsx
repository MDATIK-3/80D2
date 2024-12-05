import React from "react";
import Navbar from "./component/Navbar";
import ContactForm from "./component/Contact";
import Footer from "./component/Footer";
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <ContactForm />
      <Footer />
      
    </div>
  );
}
