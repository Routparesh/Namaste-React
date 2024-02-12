
import React from "react";
import ReactDOM from "react-dom";

//! const heading = <h1>My Name is paresh🧨</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//? const parent = React.createElement('div',{id:'parent'},
// React.createElement('div',{id:'child'},
// [React.createElement('h1',{},'My name is Bapu'),
// React.createElement('h2',{},'My name is paresh'),React.createElement('h1',{},'My name is chintu'),
// *React.createElement('h2',{},'My name is amar')]))

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(parent)

function Header(){
    return(
        <>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </>
    )
}

root.render(<Header/>);

