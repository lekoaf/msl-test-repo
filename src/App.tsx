import React from "react";
import "./App.css";
import { Player } from "media-stream-player";

function App() {
  return (
    <div className="App">
      <Player
        hostname={window.location.host}
        autoPlay
        autoRetry
        vapixParams={{ resolution: "800x600" }}
      />
    </div>
  );
}

export default App;
