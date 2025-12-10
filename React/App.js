import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "div",
    { id: "heading" },
    // [[React.createElement("h1", { id: "child1" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")],
    // [React.createElement("h1", { id: "child2" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")]]
    "Namaste React"
)

console.log(heading)

const jsxHeading = <h1>Namaste React</h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
