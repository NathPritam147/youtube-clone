import React from 'react';

const Video = (props) => {
	return (
		<div className='video-container'>
			<div className='thumbnail-container'>
				<img className='video-thumbnail' src={props.thumbnail} alt='' />
				<div className='video-time'>{props.videoTime}</div>
			</div>
			<div className='details-container'>
				<div className='author-container'>
					<img className='channel-img' src={props.channelImage} alt='' />
				</div>
				<div className='video-info-container'>
					<p className='video-title'>{props.title}</p>
					<p className='video-author'>{props.author}</p>
					<p className='video-stats'>
						{props.views} &#183; {props.postedTime}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Video;
