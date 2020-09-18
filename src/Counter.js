import React, { useReducer } from 'react';
import { reducer } from "./Reducer";
const Counter = () => {
	const [count, dispatch] = useReducer(reducer, 0);
	return (
		<>
			<h3>Increment/Decrement Counter</h3>
			<h1>{count}</h1>
			<button style={{ height: 30, marginBottom: 20 }} onClick={() => dispatch('INCREMENT')}>INCREMENT +</button>
			<button style={{ height: 30, marginBottom: 20, marginLeft: 20 }} onClick={() => dispatch('DECREMENT')}>DECREMENT -</button>
		</>
	)
}
export default Counter;