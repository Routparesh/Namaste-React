
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

// const root = ReactDOM.createRoot(document.getElementById('root'))

// // root.render(parent)

// // ?React Element
// const title = (
//     <h2>
//         This is namaste react✍
//     </h2>
// )

// *react component
// function Header(){
//     return(
//         <>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact Us</li>
//                 {title}
//             </ul>
//         </>
//     )
// }

// root.render(<Header/>);

const elem = React.createElement('div',{class:'title'},[React.createElement('h1',{},'Paresh'),React.createElement('h2',{},'Bapu'),React.createElement('h3',{},'Amar')])

const root = ReactDOM.createRoot(document.getElementById('root'));

//React Element
const heading = (
    <div class='title'>
        <h1>My name is Paresh</h1>
        <h2>My name is Suresh</h2>
        <h2>My name is Mahesh</h2>
    </div>
    
)


//React Component with arrow functions
const HeadingComponent = ()=> {
    return(
        <div>
        //pass attributes
            {heading}
            <h1>My name is Amar</h1>
            <h2>My name is Chintu</h2>
            <h3>My name is Gelhi</h3>
        </div>
    )  
}

root.render(<HeadingComponent/>)