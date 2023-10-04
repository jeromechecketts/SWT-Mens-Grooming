import React from 'react';
import Sally from '../../assets/img/SallyNuno.jpeg';

const AboutOurTeam = () => {
	return (
		<div
			id='our-team'
			className='block spacer p-top-xl'
		>
			<div className='title'>
				<h2 className='hr'>Our Team</h2>
			</div>

			<div className='row gutter-width-sm with-pb-md flex justify-around'>
				<div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
					<div className='team-member'>
						<div className='img object-fit'>
							<div className='object-fit-cover'>
								<img
									src={Sally}
									alt='Sally Nuno'
								/>
							</div>
						</div>

						<div className='team-member-content'>
							<div className='team-member-position'>
								<p>Owner / Head Barber</p>
							</div>

							<h4 className='team-member-t-head'>Sally Nuno</h4>

							<div className='team-member-description'>
								<p>
									With a passion for precision and a keen eye
									for detail, Sally has cultivated a
									reputation as one of the region's top
									barbers. As the Owner and Head Barber of SWT
									Mens Grooming, she combines years of
									experience with innovative techniques,
									ensuring every client feels and looks their
									best. Her commitment to excellence, paired
									with her innate ability to understand her
									client's needs, has made her a pillar in the
									grooming industry. When not wielding her
									scissors, Sally loves mentoring upcoming
									talent, ensuring the art of barbering
									remains vibrant for the next generation.
								</p>
							</div>
						</div>

						<nav className='team-member-nav-items'>
							<ul className='nav'>
								<li className='nav-item'>
									<a
										title='Facebook'
										href='https://www.facebook.com/p/South-Texas-Mens-Grooming-100076060005990/'
									>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>

								{/* <li className='nav-item'>
									<a
										title='LinkedIn'
										href='https://www.linkedin.com/in/sally-nuno-4403b1173/'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li> */}

								{/* <li className='nav-item'>
									<a
										title='Instagram'
										href='https://www.instagram.com/adveits/'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</li> */}
							</ul>
						</nav>
					</div>
				</div>

				{/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="team-member">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/507x600.jpg" alt="Andrew Nick" />
                            </div>
                        </div>

                        <div className="team-member-content">
                            <div className="team-member-position">
                                <p>Beard Stylist</p>
                            </div>

                            <h4 className="team-member-t-head">Andrew Nick</h4>

                            <div className="team-member-description">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
                            </div>
                        </div>

                        <nav className="team-member-nav-items">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a title="Facebook" href="https://www.facebook.com/adveits/"><i className="fab fa-facebook-f"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a title="LinkedIn" href="https://www.linkedin.com/company/18135051/"><i className="fab fa-linkedin-in"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a title="Instagram" href="https://www.instagram.com/adveits/"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> */}

				{/* <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
					<div className='team-member'>
						<div className='img object-fit'>
							<div className='object-fit-cover'>
								<img
									src='assets/img/placeholder/507x600.jpg'
									alt='Johnathan'
								/>
							</div>
						</div>

						<div className='team-member-content'>
							<div className='team-member-position'>
								<p>Barber</p>
							</div>

							<h4 className='team-member-t-head'>Johnathan</h4>

							<div className='team-member-description'>
								<p>
                                Although Johnathan is a relatively recent addition to the SWT Mens Grooming team, he has quickly become a favorite among clients. With a couple of years in the barbering industry, he brings a fresh perspective combined with tried-and-true techniques. Johnathan's dedication to his craft is evident in each haircut he delivers. He has a keen eye for detail and a modern approach to grooming that ensures every client gets a tailored experience. Friendly and professional, he's passionate about making sure each person leaves the chair looking and feeling their absolute best.
								</p>
							</div>
						</div>

						<nav className='team-member-nav-items'>
							<ul className='nav'>
								<li className='nav-item'>
									<a
										title='Facebook'
										href='https://www.facebook.com/adveits/'
									>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>

								<li className='nav-item'>
									<a
										title='LinkedIn'
										href='https://www.linkedin.com/company/18135051/'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>

								<li className='nav-item'>
									<a
										title='Instagram'
										href='https://www.instagram.com/adveits/'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default AboutOurTeam;
