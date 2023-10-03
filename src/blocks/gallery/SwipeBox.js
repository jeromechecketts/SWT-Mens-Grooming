import React, { Component, Fragment } from 'react';
import SwipeBox from 'fslightbox-react';

import Pic1 from '../../assets/img/gallery/1.jpg';
import Pic2 from '../../assets/img/gallery/2.jpg';
import Pic3 from '../../assets/img/gallery/3.jpg';
import Pic4 from '../../assets/img/gallery/4.jpg';
import Pic5 from '../../assets/img/gallery/5.jpg';
import Pic6 from '../../assets/img/gallery/6.jpg';

class SwipeBoxComponent extends Component {
    state = {
        isVisible: false,
        slide: 0,
    };
    showSlide = ( slide, event ) => {
        event.preventDefault();
        this.setState( {
            isVisible: !this.state.isVisible,
            slide: slide
        } );
    };

    render() {
        return (
            <Fragment>
                <SwipeBox
                    toggler={ this.state.isVisible }
                    slide={ this.state.slide }
                    urls={ [
                        Pic1,
                        Pic2,
                        Pic3,
                        Pic4,
                        Pic5,
                        Pic6
                    ] }
                />

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 1, event ) } title="Face & Body | Image 1" ref={ this.swipeImg } className="gallery-item swipebox" href={Pic1} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic1} alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 2, event ) } title="Hair Treatments | Image 2" className="gallery-item swipebox" href={Pic2} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic2} alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 3, event ) } title="Hands & Feets | Image 3" className="gallery-item swipebox" href={Pic3} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic3}alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 4, event ) } title="Haircuts for Men | Image 4" className="gallery-item swipebox" href={Pic4} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic4} alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 5, event ) } title="Hair | Image 5" className="gallery-item swipebox" href={Pic5} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic5} alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 6, event ) } title="Manicure | Image 6" className="gallery-item swipebox" href={Pic6} rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src={Pic6} alt="Haircut" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>
            </Fragment>
        );
    }
}

export default SwipeBoxComponent;
