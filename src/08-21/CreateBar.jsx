import TaskBar from "./TaskBar";

export default function createTask({ data }) {
	return (
		<div id="createTask">
			<input type="text" id="textInput" placeholder="Create new task..." />
			<button id="createButton" onClick={data.buttonClick}>
				CREATE
			</button>
		</div>
	);
}
