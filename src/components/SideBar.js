import React from 'react';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-link'>
				<img src='/icons/home.svg' alt='sidebar-link' />
				<div>Home</div>
			</div>
			<div className='sidebar-link'>
				<img src='/icons/explore.svg' alt='sidebar-link' />
				<div>Explore</div>
			</div>
			<div className='sidebar-link'>
				<img src='/icons/subscriptions.svg' alt='sidebar-link' />
				<div>Subscriptions</div>
			</div>
			<div className='sidebar-link'>
				<img src='/icons/originals.svg' alt='sidebar-link' />
				<div>Originals</div>
			</div>
			<div className='sidebar-link'>
				<img src='/icons/library.svg' alt='sidebar-link' />
				<div>Library</div>
			</div>
		</div>
	);
};

export default SideBar;
