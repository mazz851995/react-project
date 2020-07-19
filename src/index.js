// **********Packages Imports*******************************
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// rafce => Functional component ; rce => Class component

// **********COMPONENT IMPORTS***************************

// import TimerTick from './TimerTick/TimerTick';
import App from "./App";
// import ReactRouterDemo from './ReactRouter/ReactRouterDemo';
// import GeekyShowDemo from './GeekyShowDemo/GeekyShowDemo'
// import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
// import SpinnerLoader from './SpinnerLoader/SpinnerLoader'
// import LearnBootstrap from './LearnBootstrap/LearnBootstrap';
// import GetPokemon from "./GetPokemon/GetPokemon";

// ---------------------------------------------------------------------------------------------
ReactDOM.render(
  <>
    {/* <ReactRouterDemo/> */}
    <App />
    {/* <GeekyShowDemo age="50"></GeekyShowDemo> */}
    {/* <WelcomeMessage /> */}
    {/* <SpinnerLoader/> */}
    {/* <LearnBootstrap/> */}
    {/* <TimerTick/> */}
    {/* <GetPokemon /> */}
  </>,
  document.getElementById("root")
);
serviceWorker.unregister();
