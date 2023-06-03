import { useAuth } from "../context/AuthContext";
import { Space, Spin, message } from 'antd';
import { Box } from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const withAuth = (Component) => (props) => {
    const { token } = useAuth();
    const router = useNavigate();

    useEffect(() => {
        if (!token) {
            router('/login');
            message.error('Пожайлуста войдите аккаунт!')
        }
    }, [token])

    if (token) {
        return (
            <Component {...props} />
        )
    }
    return (
        <Box>
            <Spin size="large" />
        </Box>
    )
}
export default withAuth;