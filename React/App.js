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

// React Element
const jsxHeading = (
    <div>
        <p className="head" tabIndex="5">
            Namaste React Heading
        </p>
        <p> Second Line</p>
    </div>
)

// Functional Component
const HeadingComponent1 = () => (<h1 className="heading">Functional component</h1>)
// We can remove the return since its just one line component like the above
const HeadingComponent = () => {
    return (
    <div>
        {jsxHeading}
        <p className="head" tabIndex="5">
            Namaste React
        </p>
        <HeadingComponent1 />
        <HeadingComponent1></HeadingComponent1>
        {HeadingComponent1()}
        <p> Third Line</p>
    </div>)
}
// All three ways of calling HeadingComponent1 is correct and will return the same thing.

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)
