import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import VideosGrid from "./components/VideosGrid";

function App() {
  return (
    <div className="app">
      <Header  />
      <SideBar  />
      <VideosGrid  />
    </div>
  );
}

export default App;
