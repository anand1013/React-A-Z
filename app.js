import React from "react"; //"react" coming from node_modules
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// js engine donot know jsx .. so it get transpiled (babel lies inside Parcel) before reaching js engine
// => jsx transpiled to react.createElement

// react element
const JsxHeading = () => (
  <h1 id="heading" className="header">
    Hello React 🙋‍♂️ ANAND HERE.... JSX 😎
  </h1>
);

const MyHeadingComponent = () => (
  <div>
    {JsxHeading()}
    <h3>heading component</h3>
    <JsxHeading />
  </div>
);

// react ecomponet
// 1. class compoent  - OLD
// 2. functional componet - NEW
root.render(<MyHeadingComponent />);

//React.createElement => create an object and when we render to browser it will become HTML
//render => convert to html
//jsx -- we can replace React.createElement using jsx
