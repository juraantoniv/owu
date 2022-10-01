import React from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    let {handleSubmit, register} = useForm();
   const navigate = useNavigate()


const submit = async(user)=> {
    try {
       const {data}=await authService.login(user)
        authService.setTokens(data)
        navigate('/cars')
        console.log(data)
    }
    catch (e){

        console.log(e)
    }
}

return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'username'} {...register('username')}/>
                <input type='text' placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;