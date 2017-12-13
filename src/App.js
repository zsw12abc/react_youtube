import React, {Component} from 'react';
import YTSearch from "youtube-api-search";
import './App.css';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyB2W13_kcpo5aKjoL9t-hyWMjUDBk3xk8M';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	constructor(props) {
		super(props);
		YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
			console.log(data);
			this.setState({
				videos: data,
				selectedVideo: data[0]
			});
		})
	}

	selectedVideoHandler(selectedVideo) {
		this.setState({selectedVideo: selectedVideo})
	}

	render() {
		return (
			<div>
				<SearchBar/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos}
				           onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}/>

			</div>
		);
	}
}

export default App;
