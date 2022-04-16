import React from "react";
import MoleContainer from "./MoleContainer";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
import { useState } from "react";
import './App.css';
// A function to generate nine MoleContainers

function App() {
	let [score, setScore] = React.useState(0);

	const createMoleHill = () => {
		let hills = [];
		for (let i = 0; i < 9; i++) {
			hills.push(
				<MoleContainer key={i} setScore={setScore} score={score} />
			);
		}
    return (
      <div>
        {hills}
      </div>
    )
	};
	return (
		<div className="App">
			<h1>React-a-Mole!</h1>
			{score}
			{createMoleHill()}
		</div>
	);
}

export default App;
