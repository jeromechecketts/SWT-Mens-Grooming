import React from 'react';

const Copyright = () => {
	return (
		<div className='copyright'>
            <p>© 2023 by <a href="https://jeromechecketts.dev">Jerome Checketts</a> / <a className="secondary-semibold" href={ process.env.PUBLIC_URL + "/contacts" }>CONTACT US</a></p>
		</div>
	);
};

export default Copyright;
