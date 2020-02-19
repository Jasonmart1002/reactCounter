import React, { useState, useEffect } from "react";

export function Counter() {
	const [luna, setLuna] = useState(0);

	let handleClick = () => {
		setLuna(luna + 1);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log("This will run after 1 second!");
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<p>{luna}</p>

			<button onClick={handleClick}>click me</button>
		</>
	);
}
