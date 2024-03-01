import {React, useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import {useLocation, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../index';
import { registration, login } from '../http/userApi';
import UserStore from '../storage/UserStore';


const Auth = () => {
    let data;
    let user;
    const location = useLocation();
    const isLogin = location.pathname === '/auth'
    const navigate = useNavigate();

    const fromPage = location.state?.from?.pathname || '/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            if (isLogin){
                data = await login(email, password)
            }
            else{
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setAuth(true)
            navigate('/')
        }catch(e) {
            alert(e.response.data.message)
        }

        

    }
    return  (
        <div>
            <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className='p-5'>
                    <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            className='mt-3' 
                            placeholder='Введите ваш email...'/>
                        <Form.Control 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            className='mt-3' 
                            placeholder='Введите ваш пароль...'
                            type='password'
                            />
                        <Button variant="outline-primary" onClick={click} className='mt-3'>{isLogin ? "Войти" : "Регистрация"}</Button>
                        <Row className='d-flex justify-content-between mt-3'>
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <Nav.Link href="/registration">Зарегистрируйтесь</Nav.Link>
                                </div>
                                :
                                <div>
                                    У вас уже есть аккаунт? <Nav.Link href="/auth">Войдите</Nav.Link>
                                </div>
                            }
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;