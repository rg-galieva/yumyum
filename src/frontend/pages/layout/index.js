import React from 'react'
import Menu from '../../components/menu'
require ('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>RG <mark>React_Redux</mark></Link>
                <Menu />
            </header>

            <main>
                {props.children}
            </main>

            <footer>
                <nav>
                    <a href="">Links</a>
                    <a href="">Links</a>
                    <a href="">Links</a>
                </nav>
            </footer>
        </div>
    );
}

