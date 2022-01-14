import React from 'react';
import '../styles/NotFoud.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <span>404</span>
            <p>PAGE NOT FOUND</p>
            <p className="back__home">
                <a href="/">Back To Homepage</a>
            </p>
        </div>
    )
}

export default NotFound;
