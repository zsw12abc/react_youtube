import React from 'react';

const VideoDetail = (props) => {
	if (!props.video) {
		return <div>Loading...</div>
	} else {
		const videoId = props.video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`;
		return (
			<div className={"video-detail col-md-8"}>
				<div className={"embed-responsive embed-responsive-16by9"}>
					<iframe className={"embed-responsive-item"} src={url}></iframe>
				</div>
				<div className={"details"}>
					<div>{props.video.snippet.title}</div>
					<div>{props.video.snippet.description}</div>
				</div>
			</div>
		);
	}
};

export default VideoDetail;
