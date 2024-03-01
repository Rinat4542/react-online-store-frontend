import React from 'react'
import { useParams } from 'react-router-dom';

const SingleDevice = () => {
    const {id} = useParams();
    return  (
        <div>
            {id}
        </div>
    );
};

export default SingleDevice;