import { useContext } from 'react';
import {useLocation, Navigate} from 'react-router-dom'
import { Context } from '..';

const PrivateAuth = ({children}) => {
    const location = useLocation();
    const {user} = useContext(Context)
    console.log(user)

    if(!user.isAuth){
        return <Navigate to='/auth ' state={{from: location}}/>
    }
    return children;
}

export default (PrivateAuth)