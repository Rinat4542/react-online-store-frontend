import {React, useContext} from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';

const DeviceItem = () => {
    const {device} = useContext(Context)
    const navigate = useNavigate();
    console.log(navigate)
    return  (
        <Col md={3} onClick={() => navigate(`/device/${device.id}`)}>
            <Card style={{width:150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src=''/>
                <div className='d-flex'>
                    <div>Samsung</div>
                </div>
                <div></div>

            </Card>
        </Col>
    );
};

export default DeviceItem;