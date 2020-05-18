import React, {Component} from "react"

class PokemonApi extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		fetch("https://pokeapi.co/api/v2/pokemon/ditto")
			.then(response => response.json())
			.then(data => console.log(data))
	}

	render() {
		return (
			<div>
				CODE GOES HERE
			</div>
		);
	}
}

export default PokemonApi