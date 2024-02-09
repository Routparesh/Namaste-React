// const heading = React.createElement('h1', {id:'heading'}, 'My Name is paresh')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(heading)
// root.render(heading)
/*

<div id='parent'>
    <div id='child'>
        <h1>My name is Bapu</h1>
        <h2>My name is paresh</h2>
    </div>
</div>
*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "My name is Bapu"),
    React.createElement("h2", {}, "My name is paresh"),
    React.createElement("h1", {}, "My name is chintu"),
    React.createElement("h2", {}, "My name is amar")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
