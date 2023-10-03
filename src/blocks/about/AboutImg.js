import React from 'react';
import barbershop from '../../assets/img/bg/barbershop2.jpg';

const AboutImg = () => {
	return (
		<div
			id='about-us-img'
			className='block'
		>
			<div className='about-img'>
				<div className='img object-fit'>
					<div className='object-fit-cover'>
						<img
							src={barbershop}
							alt='About us'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutImg;
