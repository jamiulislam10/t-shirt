import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring= useContext(RingContext)
    return (
        <div>
            <h3>brother</h3>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;