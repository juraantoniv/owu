import css from './Header.modele.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    const {post} = useSelector(state => state.postReducer);
    return (
        <div className={css.Header}>
            {post && user.title}
        </div>
    );
};

export {Header};