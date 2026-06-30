/*
<div id="parent">
        <div id="child">
            <h1>Hello from nested</h1>
        </div>
    </div>

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from nested react"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
