import React from 'react';

import barbershop from '../../assets/img/bg/barbershop2.jpg';

const AboutsUs = () => {
    return (
        <section id="about-us" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="row gutter-width-sm">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="title">
                            <h2 className="text-uppercase">Welcome to SouthWest Texas Mens Grooming. Your go-to sanctuary in Uvalde for exceptional hair and beard care. Look and feel your best with us.</h2>
                        </div>
                    </div>
                </div>

                <div className="row gutter-width-sm justify-content-end">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="description">
                            <p>A visit to our barbershop is worth a thousand words. Our dedicated team of professionals is passionate about their craft. Experience it once, and you'll understand why our clients keep coming back.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutsUs;
