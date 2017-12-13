import React, {Component} from 'react';

class SearchBar extends Component {
	state = {
		content: "",
	};

	onInputChange(event) {
		console.log(event.target.value);
		this.setState ( {
			content: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<input onChange={event => this.onInputChange(event)}/>
				<p>{this.state.content}</p>
			</div>
		);
	}
}


export default SearchBar;
