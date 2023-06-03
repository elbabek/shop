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
} from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { FormWrapper, Title } from './style';
import { FetchRegistration } from '../../../api';

const Registration = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        FetchRegistration(data)
    }
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Title>
             Регистрация
            </Title>
            <Form.Item>
                <Controller
                    name='username'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='логин'/>
              )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='E-mail' />
                    )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Пароль' />
                    )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='password2'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Подтвердите пароль' />
                    )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='first_name'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Имя' />
                    )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='last_name'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Фамилия' />
                    )}
                />
            </Form.Item>

            <Form.Item>
                <Controller
                    name='phone_number'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} placeholder='Номер телефона' />
                    )}
                />
            </Form.Item>
            <Button block htmlType='submit' type='primary'>Зарегистрироватся</Button>
        </FormWrapper>
    )
}
export default Registration;