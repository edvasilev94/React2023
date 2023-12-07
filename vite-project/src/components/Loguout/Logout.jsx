import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/authContext';
import { useEffect } from 'react';

export default function  Logout () {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                alert('Oops! Something went wrong on our end. Please try again later.');
                navigate("/");
            })
    }, [])

    return null;
};
