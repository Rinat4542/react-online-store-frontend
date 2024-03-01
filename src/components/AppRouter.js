import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Admin from '../page/Admin';
import Shop from '../page/Shop';
import Basket from '../page/Basket';
import Auth from '../page/Auth';
import Error from '../page/Error';
import PrivateAuth from '../hoc/PrivateAuth';
import DevicePage from '../page/DevicePage';

const AppRouter = () => {

    return  (
        //проверка на авторизацию и создание роутов
        <Routes>
            <Route path='/' element={<Shop/>}/>
                <Route index element={<Shop/>}/>
                <Route path='/admin' element={
                    <PrivateAuth>
                        <Admin/>
                    </PrivateAuth>
                }/>
                <Route path='/basket' element={
                    <PrivateAuth>
                        <Basket/>
                    </PrivateAuth>
                }/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/registration' element={<Auth/>}/>
                <Route path='/device/:id' element={<DevicePage/>}/>
                <Route path="*" element={<Error />} />
            <Route/>
        </Routes>
    );
};

export default AppRouter;