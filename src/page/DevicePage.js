import React, { useEffect, useState } from 'react'
import {Container, Col, Image, Card, Button, Row} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
const DeavicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const params = useParams()
    useEffect(() => {

    }, [])
    return  (
        <Container>
            <Col md={4}>
                <Image width={250} height={250} src={device.img}/>
            </Col>
            <h2>{device.name}</h2>
            <Col md={4}>
                <Card className='d-flex flex-column'>
                    <h3>{device.price}</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
            <Row className='d-flex flex-column m-3'>
                <h2>Характеристики</h2>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 ===0 ? 'lightgray' : 'transparent', padding: 10} }>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DeavicePage;