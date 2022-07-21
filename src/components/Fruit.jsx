export default function Fruit({ fruitInfo, onFruitDelete }) {
	// State
	// const fruitInfo = props.fruitInfo;
	// const onFruitDelete = props.onFruitDelete;

	// Behavior

	// Render
	return (
		<div>
			<li key={fruitInfo.id}>
				{fruitInfo.name}{' '}
				<button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
			</li>
		</div>
	);
}
