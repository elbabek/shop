import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    message,
} from 'antd';
import {
    FormWrapper,
    Title,
    TitleLink
} from './style';
import { Controller, useForm } from 'react-hook-form';
import { FetchAuth } from '../../../api';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';


const Login = () => {
    const { control, handleSubmit } = useForm();
    const { login } = useAuth();
    const router = useNavigate()

    const onSubmitData = async (data) => {
        const res = await FetchAuth(data);
        if (res.access) {
            login(res.access)
            router('/')
            message.success('Добро пожаловать!!!')
        }
        else if (res.detail) {
            message.error(res.detail)
        }
        else {
            message.error("Что-то пошло не так")
        }
        console.log(res)
    }
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitData)}>
            <Title>
                Войти
            </Title>
            <Form.Item>
                <Controller
                    name='username'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Логин' />
                    )}
                />
            </Form.Item>
            <Form.Item>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Пароль' type="password" />
                    )}
                />
            </Form.Item>
            <TitleLink>
                <span>
                    Или,
                </span>
                <Link to={'/registration'}>
                    Зарегистрируйся
                </Link>
            </TitleLink>
            <Button
                block
                htmlType='submit'
                type='primary'
            >
                Войти
            </Button>
        </FormWrapper>
    )
}
export default Login;