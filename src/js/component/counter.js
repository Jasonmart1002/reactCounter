import React, { useState, useEffect } from "react";

export function Counter() {
	const [firstDigit, setfirstDigit] = useState(0);
	const [secondDigit, setsecondDigit] = useState(0);
	const [thirdDigit, setthirdDigit] = useState(0);
	const [pause, setPause] = useState(false);
	let timer;
	function stop() {
		if (pause === false) {
			clearInterval(timer);
		}
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setfirstDigit(firstDigit => firstDigit + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setsecondDigit(secondDigit => secondDigit + 1);
		}, 10000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setthirdDigit(thirdDigit => thirdDigit + 1);
		}, 100000);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<p>
				{thirdDigit % 1000}
				{secondDigit % 100}
				{firstDigit % 10}
				<button
					onClick={() => {
						setPause(!pause), stop();
					}}>
					Click me
				</button>
			</p>
		</>
	);
}
