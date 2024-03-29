import {React, useContext, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceItem';
// import {observer} from 'mobx-react-lite'
// import { Context } from '../index';
// import {fetchType, fetchBrand, fetchDevice} from '../http/deviceApi'

const Shop = () => {
    // const {device} = useContext(Context)

    // useEffect(() => {
    //     fetchType().then(data => device.setTypes(data)),
    //     fetchBrand().then(data => device.setBrands(data)),
    //     fetchDevice().then(data => device.setDevices(data.rows))
    // }, [])
    return  (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;