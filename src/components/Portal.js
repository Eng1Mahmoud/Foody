import React from 'react';
import {createPortal} from 'react-dom';

function Portal(props) {


    return createPortal(
        <div className='louding'><div className='spiner'></div></div>
        ,
        document.getElementById("portal")
    );
}

export default Portal;
