import React from 'react'
require('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'
import ProfilePrevContainer from '../../containers/profile-prev-container'
import logo from './logo.svg'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header className={s.head}>
                <div className={s.head_cont}>
                    <div className={s.logo} dangerouslySetInnerHTML={{__html: logo}}></div>

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

