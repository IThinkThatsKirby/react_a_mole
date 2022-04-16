import { useEffect } from "react";
import MoleHill from "./molehill.png";
// A useEffect hook that will start the timer and clean it up afterward
const EmptySlot = (props) => {
	useEffect(() => {
		let rngSeconds = Math.ceil(Math.random() * 5000);
		let timer = setTimeout(() => {
			props.toggle(true)
        }, rngSeconds)
		
		return () => clearTimeout(timer)

	})
    
	return (
		<div>
			<img style={{'width':'30vw'}} src={MoleHill} alt="Mole Hill" />
		</div>
	)
}

export default EmptySlot
