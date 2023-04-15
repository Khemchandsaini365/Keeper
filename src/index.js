import React from "react";
import {createRoot} from "react-dom";
import App from "./component/App";

const element= document.getElementById("root")
const root=createRoot(element)

root.render(<div> 
  <App></App>
</div>)