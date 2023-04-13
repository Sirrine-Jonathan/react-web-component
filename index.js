import React from "react";
import ReactDOM from "react-dom/client";
import WebComponent from "./components/WebComponent";
import reactToWebComponent from "react-to-webcomponent";

const webpart = reactToWebComponent(WebComponent, React, ReactDOM);

customElements.define("web-component", webpart);
