import React from 'react'
require ('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'
import ProfilePic from '../../components/profile-prev'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>RG <mark>YumYum</mark></Link>
                <ProfilePic/>
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

