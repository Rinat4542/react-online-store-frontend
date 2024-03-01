import {React, useContext } from 'react'
import {Col, Row} from 'react-bootstrap';
import { Context } from '../index';


const BrandBar = () => {
    const {device} = useContext(Context)
    return  (
    
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Col key={brand.id} 
                className='p-3'
                style={{cursor: 'pointer'}}
                border={brand.id === device.setSelectedBrand.id ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand(brand)}>
                    {brand.name}
                </Col>    
            )}
        </Row>
    
    );
};

export default BrandBar;