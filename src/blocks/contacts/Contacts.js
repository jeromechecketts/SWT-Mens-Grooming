import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>
                            <a href="mailto:southtexas78801@gmail.com">southtexas78801@gmail.com</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Email</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>315 E Main St Uvalde, TX 78801</p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Address</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>
                            <a href="tel:8309007185">(830) 900-7185</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Phone</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
