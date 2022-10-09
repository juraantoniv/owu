import {CarForm, Cars} from "./components";

const App = () => {
    return (
        <div>
            <div className={'box'}>
                <CarForm/>
                <Cars/>
            </div>
        </div>
    );
};

export {App};