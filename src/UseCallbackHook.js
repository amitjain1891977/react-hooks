import React, { useState, useCallback } from 'react';

const CounterSet = new Set();

const UseCallbackHook = () => {
	const [count, setCount] = useState(0)
	const [otherCounter, setOtherCounter] = useState(0)

	/* const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	const incrementOtherCounter = () => {
		setOtherCounter(otherCounter + 1)
	} */

	const increment = useCallback(() => {
		setCount(count + 1)
	}, [count])
	const decrement = useCallback(() => {
		setCount(count - 1)
	}, [count])
	const incrementOtherCounter = useCallback(() => {
		setOtherCounter(otherCounter + 1)
	}, [otherCounter])

	CounterSet.add(increment)
	CounterSet.add(decrement)
	CounterSet.add(incrementOtherCounter)
	alert(CounterSet.size);
	return (
		<>
			<h3>Increment/Decrement Counter</h3>
			<h1>{count}</h1>

			<h3>Other Counter</h3>
			<h1>{otherCounter}</h1>
			<button style={{ height: 30, marginBottom: 20 }} onClick={increment}>INCREMENT +</button>
			<button style={{ height: 30, marginBottom: 20, marginLeft: 20 }} onClick={decrement}>DECREMENT -</button>
			<button style={{ height: 30, marginBottom: 20, marginLeft: 20 }} onClick={incrementOtherCounter}>incrementOtherCounter</button>
		</>
	)
}

export default UseCallbackHook;