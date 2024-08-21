function TaskBar({ data, deleteFunction }) {
	return (
		<div className="taskBar" style={{ backgroundColor: data.checked ? "green" : "" }}>
			<input type="checkbox" className="checkbox" checked={data.checked} />
			<h2>{data.text}</h2>
			<button className="deleteTask" onClick={() => deleteFunction(data)}>
				DELETE
			</button>
		</div>
	);
}
function isChecked(checked) {}
export default TaskBar;
