
import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{},'My name is Bapu'),
React.createElement('h2',{},'My name is paresh'),React.createElement('h1',{},'My name is chintu'),
React.createElement('h2',{},'My name is amar')]))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)