import { useState } from 'react';

function App() {
	//// STATE (état, donnée)
	const [fruits, setFruits] = useState([
		{ id: 1, name: 'Abricot' },
		{ id: 2, name: 'Banane' },
		{ id: 3, name: 'Cerise' },
	]);

	const [newFruit, setNewFruit] = useState('');

	//// BEHAVIOR (comportement)
	const handleDelete = (id) => {
		// 1. Copier le state
		const fruitsCopy = [...fruits];

		// 2. Manipuler le state
		const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

		// 3. Modifier le state avec le setter
		setFruits(fruitsCopyUpdated);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// 1. Copier le state
		const fruitsCopy = [...fruits];

		// 2. Manipuler le state
		const id = new Date().getTime();
		const name = newFruit;
		// const fruitToAdd = { id: id, name: name };
		const fruitToAdd = { id, name };
		fruitsCopy.push(fruitToAdd);

		// 3. Modifier le state avec son setter
		setFruits(fruitsCopy);
		setNewFruit('');
	};

	const handleChange = (e) => {
		setNewFruit(e.target.value);
	};

	//// RENDER (affichage, rendu)
	return (
		<div>
			<h1>Liste de fruits</h1>

			<ul>
				{fruits.map((fruit) => (
					<li key={fruit.id}>
						{fruit.name}{' '}
						<button onClick={() => handleDelete(fruit.id)}>X</button>
					</li>
				))}
			</ul>

			<form action='submit' onSubmit={handleSubmit}>
				<input
					value={newFruit}
					type='text'
					placeholder='Ajouter un fruit'
					onChange={handleChange}
				/>
				<button>Ajouter</button>
			</form>
		</div>
	);
}

export default App;
