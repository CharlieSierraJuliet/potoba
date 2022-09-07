import classes from './Header.module.css'
import { Fragment } from 'react';
import logo from '../../assets/coverpic.jpg'
const Header=props=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>पोटोबा</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={logo} alt='Beautiful Maharshtrian Thali' />
            </div>
        </Fragment>

    )
}

export default Header;