import React, { useState } from "react";
import "../Stylesheet/Footer.css";
const Footer = () => {
  const d = new Date().getFullYear();
  const [date, setdate] = useState(d);
  return (
    <>
      <div className="Footer">
        <h1>Purchase the StartP Template now and make everything easier!</h1>
        <button>Purchase Now!</button>
        <div className="Footer-sub-section">
          <hr />
          <h3>{date} &copy; All copyright and reserved by Stripe</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
