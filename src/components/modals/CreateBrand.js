import {React, useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import { createBrand } from '../../http/deviceApi';

const CreateBrand = ({show, hide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            hide()
        })
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
                Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите название бренда'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={hide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;