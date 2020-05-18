import React from "react"

function ToDoItem(props) {
	let className = 'todo-item';
	if (props.item.completed) {
		className += ' completed'
	}
	return (
		<div className={className}>
			<input
				type="checkbox"
				onChange={() => {props.handleChange(props.item.id)}}
				checked={props.item.completed}
			/>
			<p>{props.item.text}</p>
		</div>
	);
}

export default ToDoItem