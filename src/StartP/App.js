import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Pages from "./Components/Pages";
import RTLVersion from "./Components/RTLVersion";
import Version from "./Components/Version";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Pages />
      <RTLVersion />
      <Version />
      <Features />
      <Footer />
    </>
  );
};

export default App;
