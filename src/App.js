import {useReducer, useRef} from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import './App.css';


    const reducer = (state, action) => {
        const {type, payload} = action;
        switch (type) {
            case 'Cat':
                return {...state,cats:[...state.cats,{name:payload ,id:Date.now()}]}
            case 'deleteCat':
                return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
            case 'Dog':
                return {...state,dogs:[...state.dogs,{name:payload ,id:Date.now()}]}
            case 'deleteDog':
                return {...state, dogs: state.dogs.filter(cat => cat.id !== payload)};

        }
        return state
    }
const App = () => {

    let catName = useRef()
    let dogName = useRef()

    const useCat =(e)=>{
        e.preventDefault()
        dispatch({type: 'Cat', payload: catName.current.value});
    }
    const useDog =(e)=>{
        e.preventDefault()
        dispatch({type: 'Dog', payload: dogName.current.value});
    }




    const [state, dispatch] = useReducer(reducer,{cats:[], dogs:[]});


    return (
        <div className={'box'}>

            <div className={'cats'}>
                <form>
                  <input type="text" placeholder={'cats'} ref={catName}/>
                <button onClick={useCat}>Click</button>
                 </form>
                {
                    state.cats.map(cat => (<Cat key={cat.id} catName ={cat.name} dispatch ={dispatch} />))
                }
            </div>

            <div className={'dogs'}>
                <form>
                    <input type="text" placeholder={'dog'} ref={dogName}/>
                    <button onClick={useDog}>Click</button>
                </form>
                {
                    state.dogs.map(dog => (<Dog key={dog.id} dogName ={dog.name} dispatch ={dispatch} />))
                }
            </div>

        </div>
    );
};

export {App};
                        {/*<button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete cat</button>*/}
