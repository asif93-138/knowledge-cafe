import React from 'react';
import './BContent.css';

const BContent = (props) => {
    console.log();
    return (
        <h5 className='h4'>
            {props.art.title}
        </h5>
    );
};

export default BContent;