import React from 'react';
import load from '../../assets/load.gif';

const Loader = props => (
    <div>
        <img src={load} alt="load" style={{width: 200}} />
    </div>
);

export default Loader;