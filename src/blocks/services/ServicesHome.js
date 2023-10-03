import React, { Component } from 'react';
import Swiper from 'swiper';
import haircut from '../../assets/img/bg/haircut2.jpg';
import shave from '../../assets/img/bg/shave.jpg';
import haircut2 from '../../assets/img/bg/haircut.jpg';
import beard from '../../assets/img/bg/beard.jpg';
import beard2 from '../../assets/img/bg/beard2.jpg';

class ServicesHome extends Component {
    componentDidMount() {
        new Swiper( '.adv-slider-services .adv-swiper-container', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-2-swiper-button-next',
                prevEl: '.adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 'auto'
        } );
    }

    render() {
        return (
            <section id="services" className="block">
                <div className="adv-slider-services">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper services-items clearfix">
                            <a title="Haircut" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Haircut</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={haircut} alt="Haircut" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="Shave" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Shave</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={shave} alt="Shave" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="Haircut & Shave" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Haircut & Shave</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={haircut2} alt="Haircut & Shave" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="Beard Trim" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Beard Trim</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={beard2} alt="Beard Trim" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>
                        </div>

                        <div className="adv-2-swiper-button-prev">
                            <span>
                                <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">Previous</span>
                            </span>
                        </div>

                        <div className="adv-2-swiper-button-next">
                            <span>
                                <span className="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">Next</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesHome;
