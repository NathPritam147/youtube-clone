import React from 'react';
import Video from './Video';

const VideosGrid = () => {
	const videos = [
		{
			title: 'Solidity, Blockchain, and Smart Contract Course – Beginner to Expert Python Tutorial',
			author: {
				name: 'freeCodeCamp.org',
				channelImage: '/channels/channel-2.jpeg',
			},
			views: '2.5M views',
			posted: '8 months ago',
			thumbnail: '/thumbnails/thumbnail-2.webp',
            videoTime: '16:34:10',
		},
		{
			title: 'Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question',
			author: {
				name: 'Akshay Saini',
				channelImage: '/channels/channel-1.jpeg',
			},
			views: '186K views',
			posted: '3 years ago',
			thumbnail: '/thumbnails/thumbnail-1.webp',
            videoTime: '22:20',
		},

		{
			title: 'Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto',
			author: {
				name: 'JavaScript Mastery',
				channelImage: '/channels/channel-3.jpeg',
			},
			views: '152K views',
			posted: '1 month ago',
			thumbnail: '/thumbnails/thumbnail-3.webp',
            videoTime: '1:47:30',
		},
		{
			title: '5 KEY Tips to a LONG and HAPPY LIFE! | IKIGAI BOOK REVIEW in HINDI | Ankur Warikoo',
			author: {
				name: 'Marques Brownlee',
				channelImage: '/channels/channel-4.jpeg',
			},
			views: '152K views',
			posted: '1 month ago',
			thumbnail: '/thumbnails/thumbnail-4.webp',
            videoTime: '25:50',
		},
		{
			title: 'Why did I quit my high paying job?',
			author: {
				name: 'Akshat Shrivastava',
				channelImage: './channels/channel-5.jpeg',
			},
			views: '480k views',
			posted: '1 month ago',
			thumbnail: './thumbnails/thumbnail-5.webp',
            videoTime: '34:20',
		},
		{
			title: '6 Must Try Products Under Rs 499 That Make Healthy Lifestyle Easier',
			author: {
				name: 'Fit Tuber',
				channelImage: '/channels/channel-6.jpeg',
			},
			views: '1.9M views',
			posted: '6 months ago',
			thumbnail: '/thumbnails/thumbnail-6.webp',
            videoTime: '13:40',
		},
		{
			title: 'How to Earn Stable Income in Unstable Markets? | CA Rachana Ranade',
			author: {
				name: 'CA Rachana Phadke Ranade',
				channelImage: '/channels/channel-7.jpeg',
			},
			views: '53k views',
			posted: '24 hours ago',
			thumbnail: '/thumbnails/thumbnail-7.webp',
            videoTime: '34:10',
		},
		{
			title: '20 Foods That Have Almost 0 Calories',
			author: {
				name: 'Gravity Transformation - Fat Loss Experts',
				channelImage: '/channels/channel-8.jpeg',
			},
			views: '12M views',
			posted: '1 year ago',
			thumbnail: '/thumbnails/thumbnail-8.webp',
            videoTime: '20:140',
		},
	];

	return (
		<div className='video-grid'>
			{videos && videos.length !== 0 ? (
				videos.map((video) => {
					return (
						<Video
							key={video.title}
							title={video.title}
							author={video.author.name}
							channelImage={video.author.channelImage}
							views={video.views}
							postedTime={video.posted}
							thumbnail={video.thumbnail}
                            videoTime={video.videoTime}
						/>
					);
				})
			) : (
				<div>
					<h3>No videos found!</h3>
				</div>
			)}
		</div>
	);
};

export default VideosGrid;
