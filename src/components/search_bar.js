import React, {Component} from 'react';

class SearchBar extends Component {
	state = {
		input: '',
	};

	onInputChange(event) {
		console.log(event.target.value);

	}

	render() {
		return (
			<div>
				<input onChange={this.onInputChange}/>
			</div>
		);
	}
}


export default SearchBar;
