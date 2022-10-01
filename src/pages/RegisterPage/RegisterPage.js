import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {
    let {handleSubmit, register} = useForm();
   const [error,setError]=useState()
   const navigate = useNavigate()

    const submit = async (user) => {
        try {

            await authService.register(user);
            navigate('/login')
        }
        catch (e){
            setError(e.response.data?.username)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                {error && <h3>{error}</h3>}
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;