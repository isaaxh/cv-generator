import React from "react";
import "./App.css";
import MainBody from "./components/MainBody";

import Nav from "./components/Nav";

function App() {
  return (
    <div className='bg-teal-300 h-screen'>
      <Nav />
      <MainBody />
    </div>
  );
}

export default App;
