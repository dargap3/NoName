import React from "react";
import { ContextProvider } from "../../context/Context";

import MouseTracker from "../MouseTracker/MouseTracker";
import Routes from "../Routes/Routes";
import "@brainhubeu/react-carousel/lib/style.css";
import "./App.scss";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>
      <MouseTracker />
    </>
  );
};

export default App;
