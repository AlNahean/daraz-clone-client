import "./App.css";
import React from "react";
import { AppProvider } from "./components/Context";
import Router from "./components/Router";
// import Router from

function App() {
  return (
    <div>
      <React.StrictMode>
        <AppProvider>
          <Router />
        </AppProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
