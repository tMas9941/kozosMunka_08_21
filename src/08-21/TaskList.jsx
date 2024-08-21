import { useState } from "react";
import TaskBar from "./TaskBar";

function TaskList() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "elso", checked: false },
		{ id: 2, text: "masodik", checked: false },
		{ id: 3, text: "harmadik", checked: true },
	]);
	const [inputValue, setInputValue] = useState("");

	const addNewTask = () => {
		let newTask = { id: Date.now(), text: inputValue, checked: false };
		const newTasks = [...tasks, newTask];
		setTasks(newTasks);
		console.log(inputValue);
		console.log(newTasks);
		setInputValue("");
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const deleteItem = (itemToDelete) => {
		const newTask = tasks.filter((item) => item !== itemToDelete);
		console.log(itemToDelete);
		console.log(newTask);
		setTasks(newTask);
	};

	// const checkTheBox = (itemToCheck) => {
	//     const newTask = tasks.forEach((item) => item == itemToCheck ? ) {

	//     });
	// 	console.log(itemToDelete);
	// 	console.log(newTask);
	// 	setTasks(newTask);
	// };

	return (
		<>
			<div id="createTask">
				<input type="text" id="textInput" placeholder="Create new task..." onChange={handleInputChange} />
				<button id="createButton" onClick={addNewTask}>
					CREATE
				</button>
			</div>
			<div id="taskContainer">
				{tasks.map((item) => {
					return <TaskBar key={item.id} data={item} deleteFunction={deleteItem} />;
				})}
			</div>
		</>
	);
}

export default TaskList;
