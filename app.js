import React from "react"; //"react" coming from node_modules
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "header", key: "header" },
  "Hello React ANAND HERE.....😎😎😎😎😎😎"
);
const subHeading = React.createElement(
  "span",
  { id: "subHeader", key: "subHeader" },
  "ANAND learning React 🔥🔥🔥"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  subHeading,
]);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//createElement => create and object
//render => convert to html
root.render(container);

//jsx -- we can replace create element using jsx
