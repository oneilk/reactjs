import React from "react"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			location: "laos",
			vegetarian: false,
			lactoseFree: false,
			gay: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		let {name, value, type, checked} = event.target;
		console.log(name, value, checked);
		if (type === "checkbox") {
			this.setState({
				[name]: checked
			})
		} else {
			this.setState({
				[name] : value
			});
		}
	}

	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		console.log('hi');
		return (
			<main>
				<form onSubmit={this.handleSubmit} >
					<input
						type="text"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={this.handleChange}
						name="firstName"
					/>
					<br />
					<input
						type="text"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={this.handleChange}
						name="lastName"
					/>
					<br />
					<input
						type="number"
						placeholder="Age"
						value={this.state.age}
						onChange={this.handleChange}
						name="age"
					/>
					<br />
					<br />
					<label>
						Male:
						<input
							type="radio"
							name="gender"
							value="male"
							checked={this.state.gender === "male"}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Female:
						<input
							type="radio"
							name="gender"
							value="female"
							checked={this.state.gender === "female"}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<br />
					<label>
						Pick your destination:
						<br />
						<select
							value={this.state.location}
							onChange={this.handleChange}
							name="location"
						>
							<option value="laos">Laos</option>
							<option value="nicaragua">Nicaragua</option>
							<option value="colombia">Colombia</option>
						</select>
					</label>
					<h4>Dietary Restrictions:</h4>
					<input
						type="checkbox"
						name="vegetarian"
						checked={this.state.vegetarian}
						onChange={this.handleChange}
					/>
					<label>Vegetarian</label>
					<input
						type="checkbox"
						name="lactoseFree"
						checked={this.state.lactoseFree}
						onChange={this.handleChange}
					/>
					<label>Lactose Free</label>
					<input
						type="checkbox"
						name="gay"
						checked={this.state.gay}
						onChange={this.handleChange}
					/>
					<label>Gay</label>
					<br />
					<br />
					<button>Submit</button>
				</form>
			</main>
		);
	}
}

export default App