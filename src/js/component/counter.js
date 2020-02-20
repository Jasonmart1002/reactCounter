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
			<div class="jumbotron jumbotron-fluid">
				<div class="container text-center">
					<h1 class="display-4 jumbot">
						{thirdDigit % 1000}
						{secondDigit % 100}
						{firstDigit % 10}
					</h1>
					<p class="lead">
						<button
							type="button"
							class="btn btn-outline-success"
							onClick={() => {
								setPause(!pause), stop();
							}}>
							Pause
						</button>
						<button type="button" class="btn btn-outline-success">
							Play
						</button>
					</p>
				</div>
			</div>
		</>
	);
}
