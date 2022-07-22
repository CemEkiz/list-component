export default function Fruit({ fruitInfo, onClick }) {
	// State
	// const fruitInfo = props.fruitInfo;
	// const onFruitDelete = props.onFruitDelete;

	// Behavior

	// Render
	return (
		<div>
			<li>
				{fruitInfo.name} <button onClick={onClick}>X</button>
			</li>
		</div>
	);
}
