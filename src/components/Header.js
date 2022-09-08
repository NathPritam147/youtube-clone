import React from 'react';

const Header = () => {
	return (
		<div className='header'>
			<div className='left-section'>
				<img className='hamburger-menu' src='/icons/hamburger-menu.svg' alt='' />
				<img className='youtube-logo' src='/icons/youtube-logo.svg' alt='' />
			</div>
			<div className='middle-section'>
				<input className='search-bar' type='text' name='Search' id='search' placeholder='Search' />
				<button className='search-button'>
					<img className='search-icon' src='/icons/search.svg' alt='' />
				</button>
				<button className='voice-search-button'>
					<img className='voice-search-icon' src='/icons/voice-search-icon.svg' alt='' />
				</button>
			</div>
			<div className='right-section'>
				<img className='upload' src='/icons/upload.svg' alt='' />
				<img className='youtube-apps' src='/icons/youtube-apps.svg' alt='' />
				<img className='notifications' src='/icons/notifications.svg' alt='' />
				<img className='channel' src='/icons/my-channel.jpeg' alt='' />
			</div>
		</div>
	);
};

export default Header;
