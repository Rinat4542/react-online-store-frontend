import {React, useState} from 'react'
import {Button, Modal, Dropdown, Form, Row, Col} from 'react-bootstrap'


const CreateDevice = ({show, hide}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')

    const [info, setInfo] = useState([])

    const selectFile = () => {
        
    }
    
    const addInfo = () => {
        setInfo([ ...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return  (
        <Modal
            show={show}
            hide={hide}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >имя</Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Бренд</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control onChange={e => setName(e.target.value)} value={name} placeholder='Введите название устройства' className='mt-3'/>
                    <Form.Control onChange={e => setPrice(Number(e.target.value))} value={price} placeholder='Введите стоимость устройства' className='mt-3' type='number'/>
                    <Form.Control onChange={selectFile} className='mt-3' type='file'/>
                    <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>Добавить новое свойство</Button>
                    {info.map(i =>
                            <Row className='mt-4' key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder='Введите название характеристики'/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder='Введите описание характеристики'/>
                                </Col>
                                <Col md={4}>
                                    <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                                </Col>
                            </Row>    
                    )}
                </Form>

                
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={hide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={hide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;