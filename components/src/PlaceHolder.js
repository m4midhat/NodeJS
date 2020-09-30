import React from 'react';

const PlaceHolder = (props) => {

    return(
        <div className="ui placeholder segment">
            {props.children}
        </div>
    );
};
export default PlaceHolder;