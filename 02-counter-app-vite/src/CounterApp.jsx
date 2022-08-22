import { useState } from 'react';

export const CounterApp = ({ value }) => {
	const [count, setCount] = useState(value);
	const handleIncrement = () => {
		setCount(count + 1);
	};
	const handleDecrement = () => {
		setCount(count - 1);
	};
	const handleReset = () => {
		setCount(value);
	};
	return (
		<>
			<h1>CounterApp</h1>
			<h2>{count}</h2>
			<button onClick={handleIncrement}>Increment +</button>
			<button onClick={handleReset}>Reset (0)</button>
			<button onClick={handleDecrement}>Decrement -</button>
		</>
	);
};
