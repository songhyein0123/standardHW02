import React from "react";
import Content from "./compornent/Content";
import Footer from "./compornent/Footer";
import Header from "./compornent/Header";

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
      <Footer year={2024} />
    </div>
  );
}

export default App;
