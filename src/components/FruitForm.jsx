import { useState } from 'react';

export default function FruitForm({ handleAdd }) {
	// State
	const [newFruit, setNewFruit] = useState('');

	// Behavior
	const handleSubmit = (e) => {
		e.preventDefault();

		// 1. Copier le state
		// const fruitsCopy = [...fruits];

		// 2. Manipuler le state
		const id = new Date().getTime();
		const name = newFruit;
		const fruitToAdd = { id, name };

		// 3. Modifier le state avec son setter
		handleAdd(fruitToAdd);
		setNewFruit('');
	};

	const handleChange = (e) => {
		setNewFruit(e.target.value);
	};

	// Render
	return (
		<form action='submit' onSubmit={handleSubmit}>
			<input
				value={newFruit}
				type='text'
				placeholder='Ajouter un fruit'
				onChange={handleChange}
			/>
			<button>Ajouter</button>
		</form>
	);
}
