import React from 'react'
import {Link} from 'react-router'
import s from './_styles.css'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <Link to="/">Main</Link>
            <Link to="/styles">Style Guide</Link>
            <a href="https://github.com/rg-galieva/rg-react-redux.git" target="_blank">GitHub page</a>
        </nav>
    )
}

export default Menu;