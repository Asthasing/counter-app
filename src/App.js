import React, { useState } from "react";
import "./App.css";

const App = () => {
const [counter, setCounter] = useState(0)
const Increment_Button = () => {
	// Counter state is incremented
	setCounter(counter + 1)
}
const Decrement_Button = () => {
	setCounter(counter - 1)
}

return (
  <React.Fragment>
  
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '250%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>
	Count
	<div style={{
		fontSize: '150%',
		position: 'relative',
		top: '10vh',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '40%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={Increment_Button}>Increment</button>
		<button style={{
		fontSize: '40%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={Decrement_Button}>Decrement</button>

	</div>
  
	</div>
  <div>
  <p style={{
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    top: '70vh',
  }}><b>Done by &#60; Astha Singh &#62; Registration Number&#60; 12016442 &#62;</b></p>
  </div>
  

  </React.Fragment>
  
)
}

export default App
