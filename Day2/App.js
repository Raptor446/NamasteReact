import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    { id: "parent" },
    [[React.createElement("h1", { id: "child1" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")],
    [React.createElement("h1", { id: "child2" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")]]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
