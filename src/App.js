import {useReducer} from "react";
import {useForm} from "react-hook-form";

const init = (initialValue) => {
    return {cats: initialValue, dogs: initialValue}

}


const App = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Cat':
                return {...state,register:init}
            case 'Dog':
                return {...state,register:init}
        }
    }

    function init (value){
        return {dogs:value ,cats:value}


    }

    const [state, dispatch] = useReducer(reducer, null,init)

    let {handleSubmit,register}=useForm()


    const submit = (obj) => {
        init(obj)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'cats'} {...register('cat')}/>
                <button onClick={() => dispatch({type:'Cat'})}>Click</button>
            <input type="text" placeholder={'dogs'} {...register('dog')}/>
                <button onClick={() => dispatch({type:'Dog'})}>Click</button>


                <div>{state.dogs}</div>
                <div>{state.cats}</div>
            </form>
        </div>
    );
};

export {App};