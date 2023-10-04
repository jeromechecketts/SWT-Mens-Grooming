import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside';
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const ServicesInside = () => {
	document.body.classList.add('single');
	document.body.classList.add('single-adveits_services');

	return (
		<Fragment>
			<MetaTags>
				<meta charSet='UTF-8' />
				<title>Service inside | SWT Mens Grooming</title>

				<meta
					httpEquiv='x-ua-compatible'
					content='ie=edge'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='description'
					content=''
				/>
				<meta
					name='keywords'
					content=''
				/>
				<meta
					name='robots'
					content='index, follow, noodp'
				/>
				<meta
					name='googlebot'
					content='index, follow'
				/>
				<meta
					name='google'
					content='notranslate'
				/>
				<meta
					name='format-detection'
					content='telephone=no'
				/>
			</MetaTags>

			<Loading />

			<Header logoColor='dark' />

			<main
				id='main'
				className='site-main'
			>
				<PageTitleServicesInside />

				<div
					id='page-content'
					className='spacer p-top-xl'
				>
					<div className='wrapper'>
						<div className='content'>
							<div id='single'>
								<div id='single-content'>
									<div
										id='img'
										className='block'
									>
										<div className='img-no-wrap-1'>
											<div className='img object-fit'>
												<div className='object-fit-cover'>
													<img
														src='assets/img/BarberTools.jpg'
														alt='Services'
													/>
												</div>
											</div>
										</div>
									</div>

									<div
										id='description'
										className='block spacer p-top-xl'
									>
										<div className='description'>
											<h2 className='hr text-uppercase text-center'>
												Welcome to SWT Mens Grooming's
												<br /> Services Page
											</h2>
											<p>
												At SWT Mens Grooming, we pride
												ourselves on delivering an
												unparalleled grooming experience
												that blends tradition with
												modernity. Our team of seasoned
												barbers are not just experts in
												their craft but are also keen
												listeners, ensuring that every
												cut, shave, and trim is tailored
												precisely to your preferences.
											</p>
											<div className='mb-5'>
												<ol>
													<li className='font-weight-bold'>
														Classic Haircuts:
													</li>
													<p>
														Experience a timeless
														cut that complements
														your personal style.
														Whether you're looking
														for a sleek fade, a
														textured crop, or a
														simple trim, our skilled
														barbers have you
														covered. Every haircut
														is finished with a
														refreshing rinse and
														style, leaving you ready
														to face the world with
														confidence.
													</p>
													<li className='font-weight-bold'>
														Traditional Shaves:
													</li>
													<p>
														Rediscover the art of
														shaving with our
														traditional razor
														service. We use premium
														shaving creams and
														balms, combined with the
														precision of a classic
														straight razor, to give
														you a close, smooth
														shave. Each session is
														rounded off with a
														rejuvenating cold towel
														treatment and an
														aftershave splash,
														transporting you back to
														an era where every shave
														was a ritual.
													</p>
													<li className='font-weight-bold'>
														Beard Trims & Sculpting:
													</li>
													<p>
														Beards speak volumes
														about a man's style.
														Whether you're growing
														out a full beard or
														sporting a stylish
														stubble, our barbers
														will shape and trim it
														to perfection. We
														provide a meticulous
														trimming service
														ensuring every strand is
														in place, complemented
														by nourishing beard oils
														and balms for that final
														touch.
													</p>
												</ol>
											</div>
											<p className='mt-3'>
												Every service at SWT Mens
												Grooming is more than just a
												grooming session; it's an
												experience. From the moment you
												walk in to the moment you leave
												with a fresh look, our mission
												is to ensure you feel relaxed,
												rejuvenated, and confident in
												your appearance. Book your
												appointment today and let us
												redefine your grooming journey.
											</p>
										</div>
									</div>

									<div
										id='price-list'
										className='block spacer p-top-xl'
									>
										<div className='title'>
											<h2 className='hr text-uppercase'>
												Price list
											</h2>
										</div>

										<div className='price-list'>
											<div className='price-list-items'>
												<div className='price-list-item'>
													<div className='price-list-item-title'>
														<h3>Hair care</h3>
													</div>

													<ul className='price-list-item-list-group list-group'>
														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Haircut
															</span>
															<span className='list-group-price'>
																$25
															</span>
														</li>

														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Haircuts for
																children 12 and under
															</span>
															<span className='list-group-price'>
																$20
															</span>
														</li>

														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Haircuts for
																Seniors
															</span>
															<span className='list-group-price'>
																$15
															</span>
														</li>
													</ul>
												</div>

												<div className='price-list-item'>
													<div className='price-list-item-title'>
														<h3>Shave</h3>
													</div>

													<ul className='price-list-item-list-group list-group'>
														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Haircut and
																beard modeling
															</span>
															<span className='list-group-price'>
																$35
															</span>
														</li>

														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Full shaving of
																the beard using
																hot towels
															</span>
															<span className='list-group-price'>
																$25
															</span>
														</li>

														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Beard modeling
																using hot towels
															</span>
															<span className='list-group-price'>
																$15
															</span>
														</li>
													</ul>
												</div>
												<div className='price-list-item'>
													<div className='price-list-item-title'>
														<h3>Misc</h3>
													</div>

													<ul className='price-list-item-list-group list-group'>
														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Facial
															</span>
															<span className='list-group-price'>
																$40
															</span>
														</li>

														<li className='list-group-item d-flex justify-content-between align-items-center'>
															<span className='list-group-title'>
																Wax
															</span>
															<span className='list-group-price'>
																$10
															</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<BackToServices />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</Fragment>
	);
};

export default ServicesInside;
