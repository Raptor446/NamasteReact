const parent = React.createElement(
    "div",
    { id: "parent" },
    [[React.createElement("h1", { id: "child1" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")],
    [React.createElement("h1", { id: "child2" }, "I'm an h1 tag"), React.createElement("h2", { id: "child" }, "I'm an h2 tag")]]
)

const heading = React.createElement(
    "h1",
    { id: "heading" }, // we can add attributes here to the react element
    "Hello World from React"
)

// console.log(heading) -> heading is a react element i.e object not any html element.

// Since we are putting this in DOM we are using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) // render is responsible to take this obj and convert to an h1 tag and put it in root
