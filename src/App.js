import {Header, Posts, Users} from "./components";

const App = () => {
    return (
        <div>
            <Header/>
            <div className={'box'}>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
};

export {App};