import React from 'react';
import preloader from "../../../assets/images/preloader_transparent.svg";

export const Preloader = () => {
    return (
        <div style={{
            position:'absolute',
            left:'50%',
            top:'auto'
        }}>
            <img src={preloader}  />
        </div>
    );
};

