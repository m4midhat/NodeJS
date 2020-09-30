// Import react and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText()
{
    return 'CLICK ME!'
}

// Create React Component
const App = function()

{
    const btnSubmitText = "SUBMIT";
    return <div>
    <label className="label" htmlFor="txtName">Enter Name </label>
    <input id="txtName" type="text"></input>
    <br></br>
<button id="btnSubmit" style={{backgroundColor: 'red', color: 'white'}}> {btnSubmitText}</button>
  </div>;
};



// Take the React component to show on the screeen
ReactDOM.render
(
<App/>,
document.querySelector('#root')

);