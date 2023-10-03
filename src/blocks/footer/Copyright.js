import React from 'react';

const Copyright = () => {
	return (
		<div className='copyright'>
			<a
				className='secondary-semibold'
				href={process.env.PUBLIC_URL + '/contacts'}
			>
				CONTACT US
			</a>
		</div>
	);
};

export default Copyright;
