import React from 'react';
import "@styles/NotFound.scss";

//images
import NotFoundImg from '../assets/NotFoundImg.jpg';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="not-found">
                <div className="container">
                    <img
                        alt="NotFound"
                        className="image"
                        src={NotFoundImg}
                    />

                    <div className="text">
                        <p className="title">
                            Error 404
                        </p>
                        <br/>
                        <p className="message">
                            Page nor found
                        </p>
                        <div className="button">
                            <div class="mail"><div className="mail-img"/></div> 
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;
