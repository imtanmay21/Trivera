import fire from '../../helper/fire';
import classes from './Navbar.module.css';

const Navbar = props => {

    const logoutHandler = () => {
        fire.auth().signOut();
    }

    return (
        <div className={classes.navbar}>
            <nav>
                <span>Trivera</span>
                <div>
                    <button onClick={props.onShowHome} className={classes['nav-link']}>Home</button>
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;