import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Layout />
      </div>
    </div>
  );
}

export default App;
