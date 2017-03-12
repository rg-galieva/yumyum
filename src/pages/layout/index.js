import React from 'react'
require('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'
import ProfilePrevContainer from '../../containers/profile-prev-container'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header className={s.head}>
                <div className={s.head_cont}>
                    <Link to="/" className={s.logo}>OpenSeat</Link>
                    <ProfilePrevContainer/>
                </div>
            </header>

            <main className={s.body}>
                {props.children}
            </main>

            <footer className={s.footer}>
                <div className={s.foot_cont}>
                    <nav>
                        <a href="">Links</a>
                        <a href="">Links</a>
                        <a href="">Links</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

