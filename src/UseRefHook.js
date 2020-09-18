import React, { useState, useRef } from 'react'

const UseRefHook = () => {
	const [counter, setCounter] = useState(0)
	const counterElement = useRef(null)

	const increment = () => {
		setCounter(counter + 1)
		console.log(counterElement)
	}

	return (
		<>
			<h3>useRef Hook Counter</h3>
			<h1><span ref={counterElement}>{counter}</span></h1>
			<button style={{ height: 30, marginBottom: 20 }} onClick={increment}>INCREMENT + </button>
		</>
	)
}
export default UseRefHook;