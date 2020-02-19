import React from "react";
import { Counter } from "./counter.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Counter />
		</>
	);
}
