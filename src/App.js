import { useState } from 'react';
import Fruit from './components/Fruit';
import FruitForm from './components/FruitForm';

function App() {
	//// STATE (état, donnée)
	const [fruits, setFruits] = useState([
		{ id: 1, name: 'Pastèque' },
		{ id: 2, name: 'Banane' },
		{ id: 3, name: 'Cerise' },
	]);

	//// BEHAVIOR (comportement)
	// const handleDelete = (id) => {
	// 	// 1. Copier le state
	// 	const fruitsCopy = [...fruits];

	// 	// 2. Manipuler le state
	// 	const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

	// 	// 3. Modifier le state avec le setter
	// 	setFruits(fruitsCopyUpdated);
	// };

	const handleAdd = (fruitToAdd) => {
		// 1. Copier le state
		const fruitsCopy = [...fruits];

		// 2. Manipuler le state
		fruitsCopy.push(fruitToAdd);

		// 3. Modifier le state avec son setter
		setFruits(fruitsCopy);
	};

	const displayFavFruit = (favFruit) => {
		alert(`J'aime trop ce fruit : ${favFruit}`);
	};

	//// RENDER (affichage, rendu)
	return (
		<div>
			<h1>Liste de fruits</h1>

			<ul>
				{fruits.map((fruit) => (
					<Fruit
						fruitInfo={fruit}
						onClick={() => displayFavFruit(fruit.name)}
						key={fruit.id}
					/>
				))}
			</ul>
			<FruitForm handleAdd={handleAdd} />
		</div>
	);
}

export default App;
