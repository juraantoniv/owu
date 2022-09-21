import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {userService} from "../../services";



const UserForm= ({setUser}) => {
    const {register, handleSubmit, reset,setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        setValue('name', 'Andrii')
        setValue('username', 'andr_ii')
        setValue('email', 'andr@GMAIK.COM')
    }, [setValue])

    const submit = async (us) => {
       let {data} = await userService.create(us);
        setUser(user => [...user, data])
        reset()
    };

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};