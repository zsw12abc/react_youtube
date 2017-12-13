import React, {Component} from 'react';
import YTSearch from "youtube-api-search";
import './App.css';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyB2W13_kcpo5aKjoL9t-hyWMjUDBk3xk8M';

class App extends Component {
	state = {
		videos: [],
	};

	constructor(props) {
		super(props);
		YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
			console.log(data);
			this.setState({videos: data});
		})
	}

	render() {
		return (
			<div>
				<SearchBar/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;
