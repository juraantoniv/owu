import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {userService} from "../services";




const PostForm= ({setUser}) => {
    const {register, handleSubmit, reset,setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        setValue('name', 'Andrii')
        setValue('body', 'Lorem hggjg hgjhgjgjhg hghjgjhgjg')
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
            <input type="text" placeholder={'body'} {...register('body')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export {PostForm};